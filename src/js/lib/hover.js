export default function hover() {
    var tableRows = document.querySelectorAll('.section__table .row')
        , additionalBlock;
    $(tableRows).each(function () {
        var self = $(this);
        $(self).wrap('<div class="row__wrapper"></div>');
        $(self).parent().append('<div class="pop-up"></div>');

        
        additionalBlock = $(self).parent().find('.pop-up');
        $(additionalBlock).hide();
        
        //        Adding icons
        $(additionalBlock).append('<div class="icon"><span class="icon__bell-white"></span></div>');
        $(additionalBlock).append('<div class="icon"><span class="icon__sliders-white"></span></div>');
        $(additionalBlock).append('<div class="icon"><span class="icon__star-white"></span></div>');
        $(additionalBlock).append('<div class="icon"><span class="icon__settings-white"></span></div>');
        
        
        //        Hover events
        $(self).parent().on('mouseover', function (e) {
            e.stopPropagation();
            $(this).addClass('is-active');
            $(this).find('.pop-up').show();
        });
        $(self).parent().on('mouseout', function (e) {
            e.stopPropagation();
            $(this).removeClass('is-active');
            $(this).find('.pop-up').hide();
        });
    });
} 