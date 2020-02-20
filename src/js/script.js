$(document).ready(function(){
    $(".hamburger").click(function (e) {
        e.preventDefault();
        $('.active__menu').fadeIn();
    });

    $(".close-btn").click(function (e) {
        e.preventDefault();
        $('.active__menu').fadeOut();
    });
    $('.close_navbar').on('click', function(){
        $('.active__menu').fadeOut();
    });

    new WOW().init();
});

$('.a1 a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});

$(window).scroll(function(){
    var elemScrollTop = $(window).scrollTop();
    var blockHeight = $('.header').height() + $('.main, .services_main').height();

    if (! $('.active__menu').is(':visible')) {
        if (elemScrollTop >= (blockHeight / 2) ) {
            $('.header').addClass('slick');
        } else {
            $('.header').removeClass('slick');
        }
    }
});