

$(function (){
    const $accordionPanelCaption = $('.accordion_panel_caption');
    /* console.log(accordionPanelCaption); */

    $accordionPanelCaption.on('click', function(){
        $(this).toggleClass('open_panel');
    })

    $('#js-carousel-1').owlCarousel({
        items: 1, // А по-умолчанию 3
        dotsEach: 1
      });


})