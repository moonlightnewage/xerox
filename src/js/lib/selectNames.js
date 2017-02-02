export default function selectNames(step) {
    var letters = $('a[data-letter]')
        , users = document.querySelectorAll('li.membership__user')
        , options = document.querySelectorAll('.membership .select__list li')
        , step, arrowLeft = $('.membership .icon__arrow-left')
        , arrowRight = $('.membership .icon__arrow-right');
    // Showing step number of users
    $(users).hide();
    for (var i = 0; i < step; i++) {
        $(users[i]).show();
    }
    // Clicker for select menu
    $(options).on('click', function (e) {
        e.stopPropagation();
        var target = $(e.target);
        if ($(target).is($(options[0]))) {
            for (var i = 0; i < step; i++) {
                $(users[i]).show();
            }
            for (var j = i; j < step * 2; j++) {
                $(users[j]).hide();
            }
        }
        else {
            for (var i = 0; i < step; i++) {
                $(users[i]).hide();
            }
            for (var j = i; j < step * 2; j++) {
                $(users[j]).show();
            }
        }
    });
    // Clicker for letters menu
    $(letters).on('click', function (e) {
        e.stopPropagation();
        var target = $(e.target);
        $('li.membership__user').hide();
        $('li.membership__user').filter('[data-name^="' + $(target).html().toUpperCase() + '"]').show().siblings().not('.membership__user[data-name^="' + $(target).html().toUpperCase() + '"]').hide();
    });
    $('a[data-letter]').last().on('click', function () {
        $('li.membership__user').show();
    });
    
    // Clicker for arrows
    $(arrowRight).parent().on('click', function (e) {
        e.stopPropagation();
           for (var i = 0; i < step; i++) {
                $(users[i]).hide();
            }
            for (var j = i; j < step * 2; j++) {
                $(users[j]).show();
            }
    });
    
    $(arrowLeft).parent().on('click', function(e) {
       e.stopPropagation();
        for (var i = 0; i < step; i++) {
                $(users[i]).show();
            }
            for (var j = i; j < step * 2; j++) {
                $(users[j]).hide();
            } 
    });
}