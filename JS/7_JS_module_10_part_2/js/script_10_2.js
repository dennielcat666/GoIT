/* ДЛЯ JAVASCRIPT */
/* САМА ФУНКЦТЯ СДВИГА */
function slideLeft(el, duration) {                 /* slideLength - РАСТОЯНИЕ НА КОТОРОЕ БУДЕТ СДВИГАТЬСЯ ЭЛЕМЕНТ */
    var leftPosition = parseInt(el.style.left) || 0;            /* ПРИСВАИВАЕТ ИЛИ ЗНАЧЕНИЕ ЛЕФТ (СМОТРИТ В CSS ИЛИ HTML) */
                                                                /* ЕСЛИ ЗНАЧЕНИЯ НЕТ (НЕ УКАЗАНО) ТО БУДЕТ ИСПОЛЬЗОВАТЬ */ 
                                                                /* ВТОРОЕ ЗНАЧЕНИЕ (0). parseInt - ПЕРЕВОДИТ СТРОКУ В ЧИСЛО */
                                                                /* Т.К ВТОРОЕ ЗНАЧЕНИЕ (ПРИ ПОВТОРНОМ НАЖАТИИ) БУДЕТ **px */ 
                                                                /* ЧТО БЫ НЕ ПРОИЗОШЕЛ КОНФЛИКТ (ВНИЗУ МЫ И ТАК СТРОКОЙ ДОБАВЛЯЕМ px) */
                                                                /* МЫ ПЕРЕВОДИМ В ЧИСЛО, А ПОТОМ ОПЯТЬ ДОБАВЛЯЕМ px. */

    /* БУДЕТ ЕХАТЬ БЕСКОНЕЧНО
    setInterval(function(){
        leftPosition += 1;          ШАГ/СКОРОСТЬ
        el.style.left = leftPosition + 'px';
    }, 50); */



    /* ОГРАНИЧЕННОЕ ДВИЖЕНИЕ */
    var time = 0;
    var fps = 50;

    var interval = setInterval(function(){
        if (time > duration) {          /* ВРЕМЯ, СКОЛЬКО БУДЕТ ДВИГАТЬСЯ БЛОК */
            clearInterval(interval);
        }

        leftPosition += 1;  
        time += duration/fps;         /* СТОЛЬКО ЖЕ, СКОЛЬКО И САМ ИНТЕРВАЛ НИЖЕ */        
        el.style.left = leftPosition + 'px';
    }, duration/fps);
};

/* ИЩЕМ ЭЛЕМЕНТ */
var box = document.querySelector('.js-box');

/* ПОДКЛЮЧАЕМ ФУНКЦИЮ СДВИГА */
box.addEventListener('click', function(){
    slideLeft(box, 1000);
});





/* ДЛЯ JQUERY, ИСПОЛЬЗУЕТСЯ ЧАСТО*/

$('.jquery-box').on('click', function(){
    $(this).animate({
        left: '+=52'
    }, 1000, 'easeInCirc');
});



/* ДЛЯ CSS, ИСПОЛЬЗУЕТСЯ СЕЙЧАС (ТИПА МОДНО)*/

$('.css-box').on('click', function(){
    $(this).addClass('css-box-animated');
})