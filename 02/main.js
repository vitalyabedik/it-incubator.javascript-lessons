// методы массивов

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//!!!
// CRUD
// C => [...students, newStudent] - создаем новый массив
// R =>  map (преобразовать) (obj => JSX.Element) - вывод списке для чтения
// U =>  map (condition(условие) ? obj => updated {...obj, prop: newValue} : obj) - обновление -> если совпадает какое-то условие
// D =>  filter (condition)


//!!!
// Написание полифилла метода -> map
// Нужно создать массив строк

const getNames = (array) => {
    const result = []
    const elMapFn = (st) => st.name

    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }

    return result
}

// console.log(students.map(st => st.name))
// console.log(getNames(students))


// const getSimpleStudents = (array) => {
//     const result = []
//     const elMapFn = (st) => ({
//         name: st.name,
//         scores: st.scores
//     })
//
//     for (let i = 0; i < array.length; i++) {
//         const newValue = elMapFn(array[i])
//         result[i] = newValue
//     }
//
//     return result
// }

//!!!
// избавляемся от дубляжа и выносим функцию в параметр, т.к. она везде повторяется
const selfMadeMap = (array, elMapFn) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        const newValue = elMapFn(array[i])
        result[i] = newValue
    }

    return result
}

// console.log(students.map((st) => ({
//     name: st.name,
//     scores: st.scores
// })))
//
// console.log(selfMadeMap(students, (st) => ({
//     name: st.name,
//     scores: st.scores
// })))


//!!!
// Написание полифилла метода -> filter
// Нужно создать массив строк

const selfMadeFilter = (array, conditionFn) => { // true || false
    const result = []

    for (let i = 0; i < array.length; i++) {
        if (conditionFn(array[i]) === true) {
            result.push(array[i])
        }
    }

    return result
}

// console.log(students.filter(st => st.scores >= 100))
// console.log(selfMadeFilter(students, (st => st.scores >= 100)))


//!!!
// Написание полифилла метода -> push
const selfMadePush = (array, ...els) => {
    for (let i = 0; i < els.length; i++) {
        array[array.length] = els[i]
    }

    // const result = [...array, ...els]
    // return result.length
    return array.length
}

const arr = [1,2,3,4,5]

// console.log(selfMadePush(arr, 6,7,8))
// console.log(arr.push(6,7,8))
// console.log(arr)


//!!!
// Написание полифилла метода -> includes

const selfMadeIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }
    }

    return false
}

console.log(arr.includes(4))
console.log(selfMadeIncludes(arr, 4))

