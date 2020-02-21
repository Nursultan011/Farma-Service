$(document).ready(function(){
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

$('.hamburger').click(function(){
	$(this).toggleClass('open');
	var active = $(this).toggleClass('')[0].getAttribute('class');
	(active == 'hamburger open') ? menu(1) : menu(0) 
});

function menu ( e ) {
	e = (e == 1) ? 0 : 1;
	var arr = [
		//hamburger
		[50, 0],
		[50, 100],
		[45, 0],
	]
	TweenMax.to($('.line:nth-child(1)'), 0.25, {top: arr[0][e] + '%', rotation: arr[2][e]});
	TweenMax.to($('.line:nth-child(2)'), 0.25, {scale: e});
	TweenMax.to($('.line:nth-child(3)'), 0.25, {top: arr[1][e] + '%', rotation: -arr[2][e]});
}


$('document').ready(function(){
    $('.hamburger').click(function(){
    if ($(".active__menu").is(":visible") == true) {
    $('.active__menu').hide();
    }
    else
    {
    $('.active__menu').show();
    }
    });
});

        