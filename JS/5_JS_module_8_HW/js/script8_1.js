
 $(function() {
    var $tabsLinksTitle = $('.tabs_links_title');
    var $tabsBlocksContent = $('.tabs_blocks_content');

    $tabsLinksTitle.each(function(index) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $tabsBlocksContent.hide();
            $tabsBlocksContent.each(function (indexContent) {
                if (index === indexContent) {
                    $(this).show();
                }
            })
        })
    })

}) 