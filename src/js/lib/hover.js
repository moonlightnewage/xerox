export default function hover() {
    var tableRows = document.querySelectorAll('.section__table .row')
        , additionalBlock;
    $(tableRows).each(function () {
        var self = $(this);
        $(self).wrap('<div class="row__wrapper"></div>');
        $(self).append('<div class="additional"></div>');
        
        additionalBlock = $(self).find('.additional');
        $(additionalBlock).addClass('hidden');
        
        //        Adding icons
        $(additionalBlock).append('<span class="icon icon-bell"></div>');
        $(additionalBlock).append('<span class="icon icon-sliders"></div>');
        $(additionalBlock).append('<span class="icon icon-star"></div>');
        $(additionalBlock).append('<span class="icon icon-settings"></div>');
        
        //        Wrapping icons
        $(additionalBlock).find('.icon').wrap('<div class="icon__wrapper"></div>');
        
        //        Hover events
        $(self).parent().on('mouseover', function (e) {
            e.stopPropagation();
            $(this).addClass('highlighted');
            $(this).find('.additional').removeClass('hidden');
        });
        $(self).parent().on('mouseout', function (e) {
            e.stopPropagation();
            $(this).removeClass('highlighted');
            $(this).find('.additional').addClass('hidden');
        });
    });
}