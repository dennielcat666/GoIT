/* повесить обработчик событий ('click') */
/* при клике - создавать html, и вставлять его в DOM */





(function($){                               /* IIFE */ /* указываем $, но иногда могут быть конфликты,
                                            по этому в конце указываем точно что $ значит jQuery */

    $.fn.fancybox = function () {           /* fn - это служебный обьект в библтотеке  jQuery, хранит в себе все */ 
                                            /* доступные методы для jQuery-обьектов ('click', 'on', 'slide'....) */
                                            /* чтобы функция была КОНФИГУРИРУЕМОЙ (например зменение фона и тд) нужно передать обьект (например $.fn.fancybox = function (options)) */
                                            
        /* var defaults = { */                    /* для КОНФИГУРИРУЕМОГО ПЛАГИНА вводится обтект с настройками по умолчанию */
            /* overlayColor: 'black', */
            /* font: 'Arial' */
        /* }; */


        /* var settings = $.extend(defaults, options); */    /* для КОНФИГУРИРУЕМОГО ПЛАГИНА настройки по умолчанию можно расширить пользовательскими настройками */ 
                                                        /* совместить обьекты воедино (defaults, расширить options) */
                                                        /* extend - берет первый обьект (defaults), и совмещает со вторым обьектом (options) */
                                                        /* если есть схожая настройка (overlayColor), то он его перезаписывает если нет - просто добавляет */



        var $link = this;                /* служебная переменная */
        var $body = $('body');
        var $modal;                         /* обьявляем переменные сверхуБ что бы были доступны везде, но погли принимать */
        var $overlay;                       /* разные значения в зависимости от ситуации */





        function showModal(e) {              /* функция будет создавать html и вставлять в <body> */
            
            var href = $link.attr('href');   /* обращаемся к нашей ссылке ($link) attr - позволяет установить атрибут в какое-либо значение (если передается 2 аргкмента) */
                                            /* или получить текущее значение этого атрибута (если 1 элемент) */   
            $modal = $('<div class="fancybox-modal"><img src="' + href + '"></div>');
            $overlay = $('<div class="fancybox-overlay">');
            /* $overlay.css({ */                                     /* для КОНФИГУРИРУЕМОГО ПЛАГИНА передача настроек (например) */
                /* 'background-color': settings.overlayColor */
            /* }) */


            e.preventDefault();             /* т.к по умолчанию в html в href стоит путь к большой картинке
                                            надо прервать переход по ней по умолчанию, что бы запускался jQuery плагин */

                           
            $body.append($overlay);                      
            $body.append($modal);
            $overlay.one('click', hideModal);     /* подставляет новый обработчик после открытия картинки (вызывается один раз и удаляется для экономии памяти)*/

        }


        function hideModal() {              /* функция для закрытия картинки */
            $modal.remove();                /* remove - что бы они не удалялись и не засоряли память (а не просто прятались) */
            $overlay.remove();
        }



        $link.on('click', showModal);


    return this                             /* во время вызова плагина, принято возвращать THIS */

    }

})(jQuery);                           /* конец IIFE */ /* указываем точно что $ значит jQuery */