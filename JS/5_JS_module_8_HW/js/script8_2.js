$(function() {

    var $formSquare = $('.form_square');
    var $formHiddnTextBotton = $('.form_hiddn_text');
    var $botton = $('.botton');

    $formSquare.hover(
        function() {
            var $formHiddnText = $(this).siblings('.form_hiddn_text')
            $formHiddnText.fadeIn();
        },
        function() {
            var $formHiddnText = $(this).siblings('.form_hiddn_text')
            $formHiddnText.fadeOut();
        }
    )


    $botton.on('click', function(e){
        $formHiddnTextBotton.show();
        e.preventDefault();
    })

    

})