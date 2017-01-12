export default function slideBlock() {
    var blocks = document.querySelectorAll('.section'),
        trigger,
        slideBlock;
    
    $(blocks).each(function() {
       var self = $(this);
        trigger = $(self).find('.meta-top__trigger');

//        BEGIN Clicker
        $(trigger).click(function() {
            $(this).parent().parent().find('.section__block').slideToggle(500);
            $(this).toggleClass('up');
            return false;
            });
//        END Clicker
    });
}