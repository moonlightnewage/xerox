export function tabMenu () {
    var menuItem = $('.top-nav__item');
    $(menuItem).on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
}

export function tabContent () {
    var contentItem = $('.content .icons .icon'),
        iconRect = $('.content .icons .icon-rect'),
        iconLines = $('.content .icons .icon-lines'),
        table = $('.content .section__table');
    
    $(iconLines).addClass('active');
    $(table).attr('data-style', 'rows');
    
//    $(contentItem).on('click', function(e){
//        e.stopPropagation();
//        $(this).addClass('active').siblings().removeClass('active');
//    });
    
    $(iconRect).on('click', function(e) {
        e.stopPropagation();
        $(iconRect).addClass('active').siblings().removeClass('active');
        $(table).attr('data-style', 'columns');
    });
    
    $(iconLines).on('click', function(e) {
        e.stopPropagation();
        $(iconLines).addClass('active').siblings().removeClass('active');
        $(table).attr('data-style', 'rows');
    });
    
}