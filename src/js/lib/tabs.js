export function tabMenu () {
    var menuItem = $('.top-nav__item');
    $(menuItem).on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
}

export function tabContent () {
    var contentItem = $('.content .icons .icon'),
        iconRect = $('.content .section__icons .icon__rect-white'),
        iconLines = $('.content .section__icons .icon__lines-white'),
        table = $('.content .section__table');
    
    $(iconLines).parent().addClass('active');
    $(table).attr('data-style', 'rows');
    
    
    $(iconRect).on('click', function(e) {
        e.stopPropagation();
        $(iconRect).parent().addClass('active').siblings().removeClass('active');
        $(table).attr('data-style', 'columns');
    });
    
    $(iconLines).on('click', function(e) {
        e.stopPropagation();
        $(iconLines).parent().addClass('active').siblings().removeClass('active');
        $(table).attr('data-style', 'rows');
    });
    
}