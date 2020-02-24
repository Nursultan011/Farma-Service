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
        } else {
            $('.active__menu').show();
        }
    });

});

$('.a1 a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
    return false;
});

$('.hamburger').click(function(){
	$(this).toggleClass('open');
	var active = $(this).toggleClass('')[0].getAttribute('class');
	(active == 'hamburger open') ? menu(1) : menu(0) 
});

// $('.active_menu .a1 a').click(function(e){
//     e.preventDefault();
//     $('.hamburger').removeClass('open');
// });  

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
};

        