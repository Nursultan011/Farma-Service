$(document).ready(function(){

    new WOW().init();

    // $('.close_navbar').on('click', function(e){
    //     e.preventDefault();
    //     $('.open').removeClass('open');
    // });

    // $('.active__menu .a1 a').on('click', function(e){
    //     e.preventDefault();
    //     $('.line').addClass();
    // });

    $('.close_navbar').on('click', function(){
        $('.active__menu').fadeOut();
    });

    $('.hamburger').click(function (e) {
        e.preventDefault();
        $('.hamburger span').toggleClass('toggle-black');
    });

    $('input[name=phone').mask("+7 (999) 999-99-99");

    $('.hamburger').click(function(){
        if ($(".active__menu").is(":visible") == true) {
            $('.active__menu').hide();
            $('.header').removeClass("slick_active")
        } else {
            $('.active__menu').show();
            $(".header").addClass("slick_active")
        }
    });

    $('.hamburger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        return;
      });
});

$(window).scroll(function(){
    var elemScrollTop = $(window).scrollTop();
    var blockHeight = $('.header').height() + $('.main, .main1, .main2, .main3, .main4').height();

    if (! $('.active__menu').is(':visible')) {
        if (elemScrollTop >= (blockHeight / 2) ) {
            $('.header').addClass('slick');
        } else {
            $('.header').removeClass('slick');
        }
    }
});

$('.a1 a').click(function () {
    $(".hamburger").toggleClass('hamburger_active');
    $('.header').removeClass("slick_active")
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});

        