export function tabMenu () {
    var menuItem = $('.nav__item');
    $(menuItem).on('click', function(){
        $(this).addClass('is-active').siblings().removeClass('is-active');
    });
}

export function tabContent () {
    var contentItem = $('.content__icon'),
        iconRect = $('.icon__rect-white'),
        iconLines = $('.icon__lines-white'),
        table = $('.content__table');
    
    $(iconLines).parent().addClass('is-active');
    $(table).attr('data-style', 'rows');
    
    
    $(iconRect).on('click', function(e) {
        e.stopPropagation();
        $(iconRect).parent().addClass('is-active').siblings().removeClass('is-active');
        $(table).attr('data-style', 'columns');
    });
    
    $(iconLines).on('click', function(e) {
        e.stopPropagation();
        $(iconLines).parent().addClass('is-active').siblings().removeClass('is-active');
        $(table).attr('data-style', 'rows');
    });
    
}