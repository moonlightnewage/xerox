export default function hover() {
    var tableRows = document.querySelectorAll('.content__table .content__table-row')
        , additionalBlock;
    $(tableRows).each(function () {
        var self = $(this);
        $(self).wrap('<div class="content__container"></div>');
        $(self).parent().append('<div class="content__pop-up"></div>');

        
        additionalBlock = $(self).parent().find('.content__pop-up');
        $(additionalBlock).hide();
        
        //        Adding icons
        $(additionalBlock).append('<div class="icon content__icon_pop-up"><span class="icon__bell-white"></span></div>');
        $(additionalBlock).append('<div class="icon content__icon_pop-up"><span class="icon__sliders-white"></span></div>');
        $(additionalBlock).append('<div class="icon content__icon_pop-up"><span class="icon__star-white"></span></div>');
        $(additionalBlock).append('<div class="icon content__icon_pop-up"><span class="icon__settings-white"></span></div>');
        
        
        //        Hover events
        $(self).parent().on('mouseover', function (e) {
            e.stopPropagation();
            $(this).addClass('is-active');
            $(this).find('.content__pop-up').show();
        });
        $(self).parent().on('mouseout', function (e) {
            e.stopPropagation();
            $(this).removeClass('is-active');
            $(this).find('.content__pop-up').hide();
        });
    });
} 