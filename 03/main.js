// браузерные события

/*
1. Событие - какое-то изменение состояния браузера, которое браузер имеет отслеживать (документе или DOM)
2. Типы событий:
СОБЫТИЯ РЕСУРСА
- error
- abort
- load и тд -> подробнее см доку

websocket - мы открыты в любой момент к получению данных от сервера (без отправки запроса)

СОБЫТИЯ ФОРМЫ
СОБЫТИЯ ЭКРАНА, МЫШИ, КЛАВИАТУРЫ и тд

3. Обстоятельства, при которых браузер может реагировать на события и отслеживать их

- function => как данную функцию называют (считаем их равнозначными)
3.1 handler (обработчик)
3.2 listener (слушатель)
3.3 subscriber (подписчик)

4. При наступлении события

4.1 Браузер формирует новый объект события new Event()
- const event = new Event() - объект, который содержит сведения о событии (функция-конструктор)
4.2 function(event) - функция при наступлении события будет вызвана, и в нее всегда будет
по умолчанию передаваться объект о данном событии
4.3 Функция-конструктор
[] === new Array()
{} === new Object()
const map = new Map()
const map = new Set()

Под капотом запускается конструктор события:
const event = new Event() (может называться event, ev, e)

При каком-то событии будут создаваться новые объекты на базовом интерфейсе Event
MouseEvent, KeyboardEvent -> у них будут схожи поля

5. Как мы можем зарегистрировать слушатель события/подписаться/повесить обработчик
 */

// const sm = document.getElementById('small')

// function handler_1() {
//     alert('yo!!!')
// }
//
// function handler_2() {
//     alert('Hey!!!')
// }

// мы говорим какую функцию нужно вызвать в момент наступления события
// sm.onclick = handler_1


// мы неговорим вызвать немедленно функцию
// sm.onclick = handler_1('yo!!!')


// теперь нашем handler будет анонимная функция
// эти дополнительные обертки нужно создавать, если к нам пришел какой-то коллбэк с ПАРАМЕТРАМИ
// не всякий коллбэк является обработчиком
// const anonymus = () => handler_1('yo!!!')


// УДАЛЕНИЕ обработчика события
// sm.onclick = anonymus
// sm.onclick = null


// добавление нескольких обработчиков по клику -> мы затрем одну функцию другой
// останется лишь последняя функция
// const anonymus = () => handler_1('yo!!!')
// const anonymusNext = () => handler_1('yo!!!')


// ДОБАВЛЕНИЕ СОБЫТИЯ
// поэтому нужно использовать addEventListener (добавить слушателя события)
// параметры:
// 1. тип события
// 2. обработчик события


// sm.addEventListener('click', handler_1) // onClick в React
// sm.addEventListener('click', handler_2)

// костыльное решение, но имеет куча проблем -> так не делаем, лучше addEventListener
// sm.onclick = () => {
//     handler_1()
//     handler_2()
// }

// удаление событий
// sm.removeEventListener('click', handler_1)

// 3ий параметр в addEventListener
// 3. options - объект с дополнительными настройками

// можно его задавать, чтобы обработчик отработал 1 раз -> once
// sm.addEventListener('click', handler_2, {once: true})

// bubling - погружение и всплытие события -> capture
// sm.addEventListener('click', handler_2, {capture: true})


/* Модели события
- погружение/перехват события (capture) -> от body двигаемся на дно по дереву
- всплытие (bubbling) - ищем с дна и постепенно наверх идем и проверяем повешено ли событие на элемент

Браузер настроен рассматривать события как всплывающие -> делим их на группы:
1. target (кнопка в самом внизу) - элемент который сгенерировал события (всегда один)
2. currentTarget (все остальные элементы) - элементы через которые проходит события - их много
currentTarget - Элемент который вызывает обработчик
 */

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

function handler_1() {
    console.log('yo!!!')
}

function handler_2() {
    console.log('yo!!!')
}

// function handler_3(e) {
//     console.log(e.target.id)
// }
// function handler_3(e) {
//     console.log(e.currentTarget.id)
// }

// всплытие
// sm.addEventListener('click', handler_3) // увидим 3 вывода в консоль при одном клике -> small
// md.addEventListener('click', handler_3) // увидим 2 вывода в консоль при одном клике -> medium
// bg.addEventListener('click', handler_3) // увидим 1 вывод в консоль при одном клике -> big

// target -> это происходит т.к. браузер смотрим на каком элементе есть событие и вызывает
// currentTarget -> выводит откуда начиналось событие (ссылка на элемент, который вызывает функцию)

// target -> (место рождения)
// currentTarget -> (место жительства)
// small -> medium -> big
// medium -> big
// big


// перехват события -> capture: true - ничего не будет, но теперь будет выводить
// того кто вызвал событие в обратном порядке

// capture - изменяет событие на всплытие или погружение
// sm.addEventListener('click', handler_3, {capture: true})
// md.addEventListener('click', handler_3,{capture: true})
// bg.addEventListener('click', handler_3,{capture: true})
// big -> medium -> small
// big -> medium
// big


// big -> small -> medium
// sm.addEventListener('click', handler_3, {capture: true})
// md.addEventListener('click', handler_3,{capture: false})
// bg.addEventListener('click', handler_3,{capture: true})


// при использовании target наш код становится чувствителен от структуры документа
// поэтому удобно использовать currentTarget -> мы не боимся изменения структуры HTML
// где бы это событие не сгенерировалось, когда дойдет до нашего элемента и вызови функцию


// sm.addEventListener('click', handler_3 )


// ПРАВИЛА
// используем только const и редко let
// используем только строгое равно ===
// используем только currentTarget


// КОГДА может нужен быть TARGET
// делегирование обработки события родителю
// target удобно использовать для однотипных данных, но такой подход противоречит реакту
// у нас есть много кнопок и мы ищем детей в родителе (кнопки вложены в div с id='small')
function handler_4(e) {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.id)
    }
}

sm.addEventListener('click', handler_4)




// event.stopPropagation()
// останови распространение события -> что не всплывали события
// наши события не будет задевать родителей
function handler_5(e) {
    event.stopPropagation()
    console.log(e.currentTarget.id)
}

sm.addEventListener('click', handler_5)


// event.preventDefault() - отмена поведения браузера по-умолчанию
// Элементы подверженные такому поведению:
// кнопка submit на форме
// ссылка

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    // предотвращаем стандартное поведение ссылки
    e.preventDefault()
    alert('Yuuuuooooooooo!')
})