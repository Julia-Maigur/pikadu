//создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// обращаемся к сайдбар или (создаем переменную, в которую положим меню)
let menu = document.querySelector('.sidebar')


//добавляем обработчик событий по клику и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    //отменяет стандартный клик, поведение ссылки
    event.preventDefault();
    //кликаем по кнопке меню, и к сайдбар добавляется класс визибл
    menu.classList.toggle('visible');

})