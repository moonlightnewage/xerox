export function tabMenu () {
    var menuItem = $('.top-nav__item');
    $(menuItem).on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
}

export function tabContent () {
    var contentItem = $('.content .icons .icon');
    $(contentItem).on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
}