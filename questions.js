const questions = [
    {
        text: '1. У меня отличное чувство юмора',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '2. Моя интуиция никогда не ошибается',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '3. Мое будущее кажется мне благоприятным и позитивным',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '4. Другим людям приятно со мной общаться',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '5. Я хорошо отношусь к людям, даже если наши взгляды кардинально различаются',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '6. Я люблю детей',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '7. Мне доставляет удовольствие решение различных задач и проблем',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '8. В любой задаче или деле я пытаюсь отыскать самое лучшее решение, не останавливаясь на первом найденном',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '9. Я с удовольствием ищу причины и суть различных событий',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '10. У меня есть много разных увлечений',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '11. Считаю, что любые перемены к лучшему',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '12. То, что я делаю, несет пользу людям',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '13. Я считаю полезным время от времени предаваться мечтам',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '14. Любимая музыка улучшает мне настроение, даже когда я в очень подавленном состоянии',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '15. Новые идеи вызывают у меня неподдельный интерес',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '16. Трудности и препятствия меня не останавливают',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '17. Хорошая шутка всегда вызывает у меня искренний смех, даже если у меня нет настроения',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '18. От самых близких мне людей у меня нет секретов',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '19. Физическая активность и занятия спортом доставляют мне удовольствие',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '20. Мне нравятся знакомства и общение с новыми людьми',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '21. Я хотел(-а) бы освоить что-нибудь новое, что я не умею делать (или чего раньше не делал(-а))',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '22. Я слежу за своим внешним видом',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '23. Мелкие неприятности не могут испортить мое настроение',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '24. Я доволен(-льна) своей жизнью',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '25. В будущем меня ожидают новые свершения',
        answers: [
            'Да',
            'Скорее «Да», чем «Нет»',
            'Скорее «Нет», чем «Да»',
            'Нет'
        ]
    },
    {
        text: '26. Ваш биологический возраст',
        answers: [
            'младше 18 лет',
            '18-24 года',
            '25-34 лет',
            '35-44 года',
            '45-60 лет'
        ]
    },
    {
        text: '27. Ваш пол',
        answers: [
            'Мужской',
            'Женский',
            'Ми-24',
        ]
    },
]

export default questions;