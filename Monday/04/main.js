// ассоциативный массив
/* хотим иметь несколько тудулистов и создавать добавлять туда таски
- тудулисты - массив объектов
- таски - объекты с динамическим ключом и в ключах получаем массив

тудулистов может быть много (от 1 до бесконечности)

в процессе соевршения CRUD операций, мы постоянно копируем данные,
- проблема поиска данных (сложности алгоритмов растет), массив в массив -> квадратичная сложность
- также есть проблема что у нас в массив вложены массивы -> большая вложенность, а нам нужна минимальная
 */

// const todoLists = [
//     {
//         id: '12rt-fg67',
//         title: 'What to learn',
//         filter: 'all',
//         tasks: [
//             {id: 1, title: 'HTML', isDone: true},
//             {id: 2, title: 'CCS', isDone: true},
//             {id: 3, title: 'JS/TS', isDone: false},
//         ]
//     },
//     {
//         id: '03gf-qw78',
//         title: 'What to buy',
//         filter: 'all',
//         tasks: [
//             {id: 1, title: 'Bread', isDone: true},
//             {id: 2, title: 'Meat', isDone: true},
//             {id: 3, title: 'Milk', isDone: false},
//         ]
//     },
// ]

/*
возникает идея иметь отдельные списки:
- массив тудулистов
- массив тасок

Поэтому мы создадим структуру объект для тасок, ключом будет id нашего todolist, при этом мы знаем id нашего todolist

Обращение к тудулисту по ключу объекта позволяет мгновенно получать данные, без перебора
 */

// const todoLists = [
//     {
//         id: '12rt-fg67',
//         title: 'What to learn',
//         filter: 'all',
//     },
//     {
//         id: '03gf-qw78',
//         title: 'What to buy',
//         filter: 'all',
//     },
// ]
//
// const tasks = {
//     '12rt-fg67': [
//         {id: 1, title: 'HTML', isDone: true},
//         {id: 2, title: 'CCS', isDone: true},
//         {id: 3, title: 'JS/TS', isDone: false},
//     ],
//     '03gf-qw78': [
//         {id: 1, title: 'Bread', isDone: true},
//         {id: 2, title: 'Meat', isDone: true},
//         {id: 3, title: 'Milk', isDone: false},
//     ],
// }


/*
чтобы не хардкодить id -> перепишем нашу структуру
чтобы передать в качестве ключей наше значение из переменной -> используем [ключ]
данная стуктура представляет из себя ассоциативный массив -> объект
 */

const todoListId_1 = '12rt-fg67' // v1() / получение с сервера
const todoListId_2 = '03gf-qw78' // v1() / получение с сервера

const todoLists = [
    {
        id: todoListId_1,        // '12rt-fg67'
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListId_2,        // '03gf-qw78'
        title: 'What to buy',
        filter: 'all',
    },
]

const tasks = {
    [todoListId_1]: [                             // '12rt-fg67'
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CCS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false},  // меняем на true -> см update
    ],
    [todoListId_2]: [
        {id: 1, title: 'Bread', isDone: true},    // '03gf-qw78'
        {id: 2, title: 'Meat', isDone: true},
        {id: 3, title: 'Milk', isDone: false},
    ],

    // [todoListId]: []
}

// // 1ый вариант - массив с тасками первого тудулиста
// console.log(tasks[todoListId_1])
// // 2ой вариант - это тоже самое
// console.log(tasks['12rt-fg67'])
// // 3ий вариант - это тоже самое
// console.log(tasks[todoLists[0].id])


// функции
const setTodoLists = ([]) => {
}
const setTasks = ([]) => {
}


// C - create
const addTodoList = (title) => {
    // этот ключ используется для создания нового тудулиста
    // этот ключ используется для создания тасок, по ключу тудулиста
    const todoListId = '76nb-12ds' // v1() -> генерируем новый ключ
    const newTodo = {
        id: todoListId,  // '76nb-12ds'
        title: title,
        filter: 'all'
    }

    // копируем из массива все объекты и создаем новый объект (пара ключ-значение)
    setTodoLists([...todoLists, newTodo])

    // копируем объекты и создаем новый объект (пара ключ-значение)
    // [todoListId]: [] -> создаем новый ключ (но у нас она не перезатирается в данном случае, т.к. мы сгенерировали ключ) -> см tasks
    setTasks({...tasks, [todoListId]: []})
}


// U - update (изменение статуса таски -> JS в первом тудулисте меням на true)
// ищем в массив тасок, которые принадлежат первому тудулисту
const changeStatus = (taskId, newStatus) => {
    // 1ый вариант - максимально длинный
    const todoListsTasksForUpdate = tasks[todoListId_1]
    const updatedTasksTodolist = todoListsTasksForUpdate.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    const copyTasks = {...tasks}
    copyTasks[todoListId_1] = updatedTasksTodolist
    setTasks(copyTasks)

    // 2ой вариант - средний
    const updatedTasks = tasks[todoListId_1].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    setTasks({...tasks, [todoListId_1]: updatedTasks})

    // 3ий вариант - максимально короткий
    setTasks({
        ...tasks,
        [todoListId_1]: tasks[todoListId_1].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
    })
}

// D - delete - удалим таску и не знаем в какому тудулисте она лежит
const deleteTask = (todoListId, taskId) => {
    const updatedTasks = tasks[todoListId].filter(t => t.id !== taskId)
    setTasks({...tasks, [todoListId]: updatedTasks})
}