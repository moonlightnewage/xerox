export default function slideBlock() {
    var blocks = document.querySelectorAll('.section'),
        trigger,
        slideBlock;
    
    $(blocks).each(function() {
       var self = $(this);
        trigger = $(self).find('.meta-top__trigger');

//        BEGIN Clicker
        $(trigger).on('click', function(e) {
            e.stopPropagation();
            var target = $(e.target);
            
            $(target).parent().parent().find('.section__block').slideToggle(500, function() {
                $(target).toggleClass('up');
            });
        });
//        END Clicker
    });
}