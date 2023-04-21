// Типы данных

/*
примитивы:
number (NaN, Infinity), string, boolean, null, undefined, bigInt, symbol

объекты:
object, array, function
 */


// отличия объектов от примитивов
/*
1. Сложная структура
2. Имеют свойства и методы
3. Ссылочный тип данных
*/

const num = 5;

const obj = {}        // №234 (номер/ссылка ячейки в памяти) -> создание с помощью литерала { } или конструктора new Object()
const num_2 = num    // (5 & 5) - хранится 2 ячейки в памяти
const obj_2 = obj    // №234 ( {} ) - хранится 1 объект в ячейке памяти (ссылка на один и тот же объект)

obj_2.name = "Alex"
console.log(obj)

const arr = [] // new Array()

// class Student {
// }
// const st = new Student()


// иммутабельность - мы создаем новую сущность и в ней делаем что хотим (делается независимая копия)
// копии объектов и массивов - другой объект и массив, с данными исходного массива/объекта

// копия объекта
const user = {  //№345
    name: 'Bob',
    age: 22,
    isStudent: false
}

// Боб стал студентом
const copyUser = { //№346
    ...user,
    // name: 'Bob',
    // age: 22
    // isStudent: false
    isStudent: true
}

console.log(user === copyUser) // false - разные ячейки (объекты)


// копия массива
const array = [1, 2, 3, 4, 5]
const copyArray = [...array]

function stateChecker(current, next) {
    if (current === next) {
        alert('Изменений нет. Страницу не меняем')
    } else {
        alert('Изменения произошли, надо обновить представление')
    }
}

// stateChecker(user, copyUser)


// массив объектов - более сложная структура данных

const students = [ // state
    {
        name: 'Bob',
        age: 34,
    },
    {
        name: 'Alex',
        age: 32,
    },
]

// более сложный вариант
const studentsAll = [ // state
    {
        name: 'Bob',
        age: 34,
        address: {
            city: 'Sevastopol',
            street: 'Lenina'
        }
    },
    {
        name: 'Alex',
        age: 32,
        address: {
            city: 'Bejing',
            street: 'Mao'
        }
    },
]

/* CRUD
- Create - создание данных (add)
- Read - вывод списка для чтения (filter, sort, search)
- Update - обновление данных
- Delete - удаление данных
*/

// "CREATE"
// add new student
const newStudent = {
    name: 'John',
    age: 23,
}

// более сложный вариант
const newStudentAll = {
    name: 'John',
    age: 23,
    address: {
        city: 'Sudan',
        street: 'FIDE'
    }
}

// в новом массиве лежат также ссылки на старые объекты
const students_1 = [...students, newStudent] // [old, old, new]
const studentsAll_1 = [...studentsAll, newStudentAll] // [old, old, new]
// реакт на основе поверхностного сравнения сделает вывод и обновит новые (new) данные
// stateChecker(studentsAll, studentsAll_1)


// "UPDATE"
// student age changed to John
const students_2 = students_1.map(student => student.name === "John" // [student, student, newStudent]
    ? {...student, age: 24}
    : student
)
// stateChecker(students_1, students_2)


// student address changed "UPDATE"
// const students_2 = [...students, {...newStudent, address: {...newStudent.address, street: "FIFA"}}] - так не пишем
// более сложный вариант
const studentsAll_2 = studentsAll_1.map(student => student.name === "John"
    ? {...student, address: {...student.address, street: "FIFA"}}
    : student
)


// "DELETE"
// delete student with name Bob
const students_3 = students_2.filter(student => student.name !== "Bob")
stateChecker(students_2, students_3)

