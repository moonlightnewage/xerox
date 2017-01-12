export default function createSpinner(multipleSelectClass) {
    //    var selects = document.querySelectorAll(multipleSelectClass)
    //        , options, list, switcher, arrowUp, arrowDown;
    //    $(selects).each(function () {
    //        var self = $(this);
    //        $(self).hide();
    //        $(self).wrap('<div class="multiple-select__wrapper"></div>').after('<ul class="multiple-select__list"></ul>');
    //        options = $(self).children();
    //        list = $(self).next('ul.multiple-select__list');
    //        $(list).after('<div class="multiple-select__switcher"></div>');
    //        switcher = $(list).next('div.multiple-select__switcher');
    //        $(switcher).append('<div class="icon arrow-up"></div>').append('<div class="icon arrow-down"></div>');
    //        for (var i = 0; i < options.length; i++) {
    //            $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo(list);
    //        }
    //        $(list).find('li').first().addClass('active');
    //        arrowDown = $(switcher).find('div.arrow-down');
    //        arrowUp = $(switcher).find('div.arrow-up');
    //        // BEGIN Clickers
    //        $(arrowDown).on('click', function (e) {
    //            e.stopPropagation();
    //            var target = $(e.target);
    //            var activeElem = $(target).parent().prev().find('li.active');
    //            var activeElems = $(target).parent().prev().find('li');
    //            var lastElem = $(activeElems[activeElems.length - 1]);
    //            if (!($(lastElem).hasClass('active'))) {
    //                $(activeElem).removeClass('active').slideUp().next().addClass('active');
    //            }
    //        });
    //        $(arrowUp).on('click', function (e) {
    //            e.stopPropagation();
    //            var target = $(e.target);
    //            var activeElem = $(target).parent().prev().find('li.active');
    //            var activeElems = $(target).parent().prev().find('li');
    //            var firstElem = $(activeElems[0]);
    //            if (!($(firstElem).hasClass('active'))) {
    //                $(activeElem).removeClass('active').prev().addClass('active').slideDown();
    //            }
    //        });
    //        // END Clickers
    //    });
    var selects = document.querySelectorAll(multipleSelectClass)
        , options
        , list
        , placeholder
        , switcher
        , arrowUp, arrowDown
        , value;
    $(selects).each(function () {
        var self = $(this);
        $(self).hide();
        
        options = $(self).children();
        
        $(self).wrap('<div class="multiple-select__wrapper"></div>').before('<div class="multiple-select__placeholder">'+($(options[0]).html())+'</div>').after('<ul class="multiple-select__list"></ul>');
        list = $(self).next('ul.multiple-select__list');
        placeholder = $(self).parent().find('div.multiple-select__placeholder');
        $(list).addClass('hidden');
        switcher = $(placeholder).after('<div class="multiple-select__switcher"></div>').next();
        $(switcher).append('<div class="icon icon-arrow-up"></div>').append('<div class="icon icon-arrow-down"></div>');
        for (var i = 0; i < options.length; i++) {
            $('<li data-item="' + i + '"></li>').text(options[i].innerHTML).appendTo(list);
        }
        // Clickers BEGIN
        $(switcher).on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            $(target).parent().next().next().toggleClass('hidden');
        });
        $(list).children().on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            $(target).addClass('active').siblings().removeClass('active');
            value = $(target).attr('data-item');
            $(self).find('option[value="' + value + '"]').attr('selected', 'selected').siblings().removeAttr('selected');
            $(self).prev().prev().text($(target).text());
            $(target).parent().addClass('hidden');
        });
        $(document).on('click', function (e) {
            e.stopPropagation();
            var target = $(e.target);
            if (!$(target).is($(self).parent())) {
                $(target).find('ul.multiple-select__list').addClass('hidden');
            }
        });
        // Clickers END
    });
}