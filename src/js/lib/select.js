export default function createSpinner(multipleSelectClass) {
    var selects = document.querySelectorAll(multipleSelectClass),
        options, 
        list, 
        placeholder, 
        switcher,
        wrapper, 
        value;
    
    $(selects).each(function() {
        var self = $(this);
        $(self).hide();
        
        options = $(self).children();
        
        $(self).wrap('<div class="select"></div>').before('<div class="select__placeholder"><span class="select__text">' + ($(options[0]).html()) + '</span></div>').after('<ul class="select__list"></ul>');
        
        list = $(self).next('ul.select__list');
        
        for (var i = 0; i < options.length; i++) {
            $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo(list);
        }
        
        $(list).hide();
        
        placeholder = $(self).parent().find('div.select__placeholder');
        wrapper = $(self).parent();
        
        switcher = $(placeholder).after('<div class="select__switcher"></div>').next();
        
        $(switcher).append('<span class="icon__arrow-up-gray icon__arrow-up-gray_select"></span>').append('<span class="icon__arrow-down-gray icon__arrow-down-gray_select"></span>');
        $(switcher).children().wrap('<div class="icon select__icon"></div>')
        
        
        // Clickers BEGIN
        $(wrapper).on('click', function (e) {
            e.stopPropagation();
           $(this).find('ul.select__list').fadeToggle(200);
        });
        
        $(list).children().on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            $(target).addClass('is-active').siblings().removeClass('is-active');
            value = $(target).attr('data-item');
            $(self).find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
            $(self).prev().prev().children().text($(target).text());
            $(target).parent().fadeOut(200);
        });
        
        $(document).on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            if (!$(target).is($(self).parent())) {
                $(target).find('ul.select__list').fadeOut(200);
            }
        });
        // Clickers END
    });
}