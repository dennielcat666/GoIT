

/* для вызова функции без конфигурации (без обтекта options в $.fn.fancybox = function (options)) */


$(function() {
    $('a.fancybox').fancybox();                 
})





/* для функции с конфигуряцией */

/* $(function() {

    $('a.fancybox').fancybox({
        overlayColor: 'red'
    });

}) */