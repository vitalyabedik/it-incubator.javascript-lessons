/*
сортировка
обычно сортировка происходит на сервере
 */

// Метод sort
// 1. Сортирует строки 'из коробки', т.е. без доп. параметров
const name1 = ['Donald', 'Joe', 'Barack']
console.log(name1.sort())                    // Barack, Donald, Joe


// 2. Сортирует строки типа по 'алфавиту' (unicode table)
const name2 = ['Donald', 'Joe', 'Barack', 'alex', 'Юра', 'игорь']  // Barack, Donald, Joe, alex, Юра, игорь
console.log(name2.sort())

// 3. Работает мутабельно (сортирует массив на месте) -> возвращает ссылку на исходный массив
console.log(name1)

// 4. Возвращает ссылку на исходный массив
console.log(name1.sort() === name1) // true

// Приводит числа к строке и сортирует их по unicode
const nums = [1000, 999, 20000, 4, -100]
console.log(nums.sort())   // -100, 1000, 20000, 4, 999

//5. Для остальных случаев необходимо передать функцию сравнения (callback)
const compareFunction = (a, b) => {  // по возрастанию
    // > 0 - надо переставить
    // < 0 - не надо менять местами
    if (a > b) {
        return 10 // любое положительное число
    } else {
        return -1 // любое отрицательное число
    }
}

//6. Функция сравнения должна возвращать число большее или меньшее 0
// const compareFunction = (a, b) => a - b

console.log(nums.sort(compareFunction))

//7. Вместе с sort часто используется revers
console.log(nums.reverse())


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
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
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

// 8. сортировка массива объектов по числовым значениям
console.log(students.sort((a, b) => a.age - b.age))

// 9. сортировка массива объектов по строковым значениям
// регистро зависимая сортировка
const sortByName = (a, b) => {
    if (a.name > b.name) {
        return 10
    } else {
        return -10
    }
}
console.log(students.sort(sortByName))
// регистро НЕзависимая сортировка
console.log(students.sort((a, b) => a.name.localeCompare((b.name))))


/*
Еще про сортировки
 */

// пузырьковая сортировка (bubble sort)
// за одну итерацию, в результате сравнения, у нас всплывает (как пузырек) одно максимальное число (попадает вконец массива)
// чтобы поставить второе число на верх -> еще один цикл -> и так каждый раз повторять цикл

const numbers = [90, 67, 23, 67, 12, 34]

// если элемент массива выходит за его пределы, то в других языках ошибка обычно
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i + 1]) { // 'кривой' порядок
//         // меняем местами (простой вариант)
//         // let temp = numbers[i]
//         // numbers[i] = numbers[i + 1]
//         // numbers[i + 1] = temp
//
//         // меняем местами через ДП (современнее)
//         // const arr = [numbers[i], numbers[i + 1]]
//         // [numbers[i + 1], numbers[i]] = arr
//
//         // еще короче
//         // обязательно вконце дб ; -> т.к. строка начинается со скобки
//         [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
//     }
// }

// On2 - сложность
// for (let j = 0; j < numbers.length; j++) {
//     for (let i = 0; i < numbers.length - 1; i++) {   // чтобы не вышли элементы за массив -
//         if (numbers[i] > numbers[i + 1]) { // 'кривой' порядок
//             [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
//         }
//     }
// }

// console.log(numbers)

// дополнительные улучшения
for (let j = 0; j < numbers.length - 1; j++) {    // как только мы упорядочим 4 числа, то 5 автоматом станет, поэтому -1 (убираем повторные действия)
    let isSorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {   // чтобы не вышли элементы за массив -> поэтому -1 -> -j
        if (numbers[i] > numbers[i + 1]) { //
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]];
            isSorted = false
        }
    }
    if (isSorted) break
}

console.log(numbers)