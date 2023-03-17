import axios from 'axios'
import express from 'express'
import TelegramBot from 'node-telegram-bot-api'
import { Configuration, OpenAIApi } from 'openai'
import questions from './shizo.js'
import two from './2.js'



process.env.OPENAI_API_KEY = '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'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);


const token = '6135394160:AAEASzii1efSDyezZn69_K5xsep6-ezMago'

const bot = new TelegramBot(token, { polling: true })


const currentTest = {
    name: null,
    questions: [],
    answers: {},
    index: 0,
    getOptions() {
        const options = this.questions[this.index].answers.map((answer, i) => [{
            text: answer, callback_data: i
        }])
        return {
            reply_markup: JSON.stringify({
                inline_keyboard: options
            })
        }
    },
    async generateTest(text) {
        console.log('ТЕМА - ' + text)
        const prompt = `Сгенерируй тест "${text}" из 7 вопросов в JSON формате: {"question":question, "answers": answer[]}[], варианты ответов начинаются с "a)", "b)" или "c)"`

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.15,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })

        this.questions = JSON.parse(response.data.choices[0].text)
        this.name = text
        this.answers = {}
        this.index = 0
    },
    clear() {
        this.questions = []
        this.name = null
        this.answers = {}
        this.index = 0
    }
}

let loading = false;

bot.setMyCommands([
    { command: '/start', description: 'start' },
])

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [[
            { text: "a", callback_data: "a" },
            { text: "b", callback_data: "b" },
            { text: "c", callback_data: "c" },
        ]]
    })
}


const mapLetterToDigit = (letter) => {
    switch (letter) {
        case 'a': return 0
        case 'b': return 1
        case 'c': return 2
    }
}

const startOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: "Определение типа личности", callback_data: "personality" }],
            [{ text: "Определение психологического возраста", callback_data: "age" }],
            [{ text: "Склонность к шизофрении", callback_data: "shizo" }],
        ]
    })
}




bot.on('message', async (msg) => {
    const text = msg.text
    const chatId = msg.chat.id

    if (loading) {
        bot.sendMessage(chatId, 'ЖДИ БЛЕАТ')
        return
    }
    loading = true


    if (msg.text === '/start') {
        await bot.sendMessage(chatId, 'Напиши название теста, который хочешь пройти или выбери из предложенных:', startOptions)
        loading = false
        return
    }

    currentTest.clear()
    await bot.sendMessage(chatId, 'Генерирую тест, подожди...')

    await currentTest.generateTest(text)

    const message = currentTest.questions[0]?.question + '\n' +
        currentTest.questions[0]?.answers.join('\n')

    await bot.sendMessage(chatId, message, options)
    loading = false
    return
})



bot.on('callback_query', async (msg) => {
    const data = msg.data
    const chatId = msg.message.chat.id

    if (loading) {
        bot.sendMessage(chatId, 'ЖДИ БЛЕАТ')
        return
    }
    loading = true


    if (data === 'personality') {
        await bot.sendMessage(chatId, 'Генерирую тест, подожди...')
        await currentTest.generateTest('Определение типа личности')


        const message = currentTest.questions[0]?.question + '\n' +
            currentTest.questions[0]?.answers.join('\n')

        await bot.sendMessage(chatId, message, options)
        loading = false
        return
    }

    if (data === 'age') {
        await bot.sendMessage(chatId, 'Генерирую тест, подожди...')
        await currentTest.generateTest('Определение психологического возраста')


        const message = currentTest.questions[0]?.question + '\n' +
            currentTest.questions[0]?.answers.join('\n')

        await bot.sendMessage(chatId, message, options)
        loading = false
        return
    }


    if (data === 'shizo') {
        await bot.sendMessage(chatId, 'Генерирую тест, подожди...')
        await currentTest.generateTest('Склонность к шизофрении')


        const message = currentTest.questions[0]?.question + '\n' +
            currentTest.questions[0]?.answers.join('\n')

        await bot.sendMessage(chatId, message, options)
        loading = false
        return
    }


    if (!currentTest.questions?.length) {
        loading = false
        return
    }

    await bot.sendMessage(chatId, `Ответ: ${data}`)


    if (currentTest.index + 1 >= currentTest.questions?.length) {
        await bot.sendMessage(chatId, 'Формирую ответ...')
      
        const prompt = `Придумай результаты теста "${currentTest.name}" на основе данных ответов:\n` +
            Object.entries(currentTest.answers).map(item => `${item[0]}: ${item[1].slice(3)}`).join('\n')

        console.log(prompt)

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            temperature: 0.4,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        })
        console.log(response.data.choices[0].text)
        await bot.sendMessage(chatId, response.data.choices[0].text)
        currentTest.clear()
        loading = false
        return
    }


    const currentQuestion = currentTest.questions[currentTest.index]

    currentTest.answers[currentQuestion.question] = currentQuestion.answers[mapLetterToDigit(data)]
    currentTest.index++;

    const message = currentTest.questions[currentTest.index]?.question + '\n' +
        currentTest.questions[currentTest.index]?.answers.join('\n')
    console.log(message + '\n' + data)
    await bot.sendMessage(chatId, message, options)
    loading = false
    return

})




