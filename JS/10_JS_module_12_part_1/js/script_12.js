$(function() {
    var html = $('#test').html();     /* поиск по id */ /* html() - брать содержимое тега */
    
    var data = {
        title: 'Hello world!'        /* title - из html файла */
    };



    /* вариант с массивом */
   /* var articles = [
       {
           title: 'Article 1',
           content: 'Odio rem qui hic? Animi totam ratione nam, optio aperiam deleniti exercitationem laborum provident debitis nulla ipsa voluptatem suscipit quam? Laudantium, ratione!'
       },
       {
            title: 'Article 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem qui hic?'
       },
       {
            title: 'Article 3',
            content: 'Animi totam ratione nam, optio aperiam deleniti exercitationem laborum provident debitis nulla ipsa voluptatem suscipit quam? Laudantium, ratione!'
       }
   ] */

    var content = tmpl(html, data)        /* tmpl - функция из tamplate.js. передаем туда строку (переменная html), и объект (переменная data) */



    /* для варианта с массивом */
   /* var content = tmpl(html, {
       data: articles
   }); */

    $('body').append(content);         /* вставить содержание (например content) в body */
});