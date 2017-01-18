export default function createSpinner(multipleSelectClass) {
    var selects = document.querySelectorAll(multipleSelectClass)
        , options, list, placeholder, switcher
        , wrapper, arrowUp, arrowDown, value;
    $(selects).each(function () {
        var self = $(this);
        $(self).hide();
        options = $(self).children();
        $(self).wrap('<div class="multiple-select"></div>').before('<div class="multiple-select__placeholder">' + ($(options[0]).html()) + '</div>').after('<ul class="multiple-select__list"></ul>');
        list = $(self).next('ul.multiple-select__list');
        placeholder = $(self).parent().find('div.multiple-select__placeholder');
        wrapper = $(self).parent();
        $(list).hide();
        switcher = $(placeholder).after('<div class="multiple-select__switcher"></div>').next();
        $(switcher).append('<span class="icon icon-arrow-up"></span>').append('<span class="icon icon-arrow-down"></span>');
        $(switcher).children().wrap('<div class="icon-wrapper"></div>')
        for (var i = 0; i < options.length; i++) {
            $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo(list);
        }
        
        //         Clickers BEGIN
        $(wrapper).on('click', function (e) {
            e.stopPropagation();
           $(this).find('ul.multiple-select__list').fadeToggle(200);
        });
        $(list).children().on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            $(target).addClass('active').siblings().removeClass('active');
            value = $(target).attr('data-item');
            $(self).find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
            $(self).prev().prev().text($(target).text());
            $(target).parent().fadeOut(200);
        });
        $(document).on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            if (!$(target).is($(self).parent())) {
                $(target).find('ul.multiple-select__list').fadeOut(200);
            }
        });
        // Clickers END
    });
}