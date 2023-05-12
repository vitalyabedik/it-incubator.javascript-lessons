// 1. Реализуйте функцию, которая принимает параметром подсторку, число повторов
//и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки
//с использованием разделителя.

// const repeatString = (str, n, symb) => str.repeat(n).split('').join(',');

// const repeatString = (str, n, symb) => {
//     let result = '';
//     for (let i = 0; i < n; i++) {
//         if (i > 0) {
//             result += symb;
//         }
//         result += str;
//     }
//     return result;
// }

const repeatString = (str, repeatCount, separator) => {
    let resultStr = ''
    if (repeatCount <= 0) {
        return resultStr
    }
    for (let i=0; i < repeatCount; i++) {
        if (i === repeatCount - 1) {
           return resultStr = `${resultStr}${str}`
        }
        resultStr = `${resultStr}${str}${separator}`
    }

    return resultStr
}

// const repeatString_3 = (str, n, splitter) => {
//     return (str+splitter).repeat(n-1)+str;
// }



// console.log(repeatString('yo', 3, ' ')); // => "yo yo yo"
repeatString('yo', 3, ','); // => "yo,yo,yo"
repeatString('yo', 3, ', '); // => "yo, yo, yo"
repeatString('yo', 0, ', '); // => ""
repeatString('yo', 1, ', '); // => "yo"

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
//а возвращает true, если строка начинается с указанной подстроки, в противном
//случае - false. Регистр не учитывается.

const checkStart = (str, substr) => str.toLowerCase().substring(0, substr.length) === substr

// const checkStart = (str, subStr) => str.toLowerCase().startsWith(subStr.toLowerCase())

// console.log(checkStart('Incubator', 'inc'))
// console.log(checkStart('Incubator', 'yo'))
// checkStart('Incubator', 'inc'); // => true
// checkStart('Incubator', 'yo'); // => false

//3. Реализуйте функцию, которая принимает параметром строку и число
//(количество символов), а возвращает строку из параметров, обрезанную до
//указанного количества символов и завершает её многоточием.

const truncateString = (str, num) => str.substring(0, num) + '...'

// console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10))
// truncateString('Всем студентам инкубатора желаю удачи!', 10); // => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и
//возвращает самое короткое слово в предложении, если в параметрах пустая строка
//или не строка, то возвращает null.

const getMinLengthWord = (str) => {
    if (str === '' || typeof str !== 'string') {
        return null
    }

    return str.split(' ').sort((a,b) => a.length - b.length)[0]
}

// console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи.')); // => "Всем"
// console.log(getMinLengthWord('')); // => null
// console.log(getMinLengthWord(123)); // => null
// console.log(getMinLengthWord(true)); // => null
// console.log(getMinLengthWord(undefined)); // => null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и
//возвращает то же предложение, где все слова написаны строчными, но начинаются
//с заглавных букв.

const setUpperCase = (str) => str.toLowerCase().split(' ').map(str => str[0].toUpperCase() + str.slice(1)).join(' ')

console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ'))
// setUpperCase('всем стУдентам инкуБатора Желаю удачИ'); // => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

// const isIncludes = (str, substr) => str.split('').filter(s => s === substr.split('').join())
// const isIncludes = (str, substr) => {
//     const newStr = [...new Set (str.toLowerCase())]
//     const newSubstr = [...new Set (substr.toLowerCase())]
//
//    return newStr.map((s, i) => s.includes(newSubstr[i]) ? false : true)
//     // return newStr.split('').map(el => el === 'c')
// }

const isIncludes = (str, substr) => {
    const newStr = str.toLowerCase()
    const newSubstr = substr.toLowerCase()

    const lettersArr = []

    for (let i = 0; i < newSubstr.length; i++) {
        if (!lettersArr.includes(newSubstr[i])) {
            lettersArr.push(newSubstr[i])
        }
    }

    return lettersArr.every(letter => newStr.includes(letter))
    // return newStr.split('').map(el => el === 'c')
}

// const isIncludes = (str, subStr) => [...subStr.toLowerCase()].every(letter => str.toLowerCase().includes(letter))


  // console.log(isIncludes('Incubator', 'Cut'))

// isIncludes('Incubator', 'Cut'); // => true
// isIncludes('Incubator', 'table'); // => false
// isIncludes('Incubator', 'inbba'); // => true //*false
// isIncludes('Incubator', 'inba'); // => true  //*true
// isIncludes('Incubator', 'Incubatorrr'); // => true //*false
