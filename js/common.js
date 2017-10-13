$(document).ready(function () {

$('.svg-link-left').hover(function(){
	$('.right-link').removeClass('active');
	$('.svg-link-right').attr('class', 'svg-link-right');

	$('.left-link').addClass('active');
	$('.svg-link-left').attr('class', 'svg-link-left active-block');
});

$('.svg-link-right').hover(function(){
	$('.left-link').removeClass('active');
	$('.svg-link-left').attr('class', 'svg-link-left');

	$('.right-link').addClass('active');
	$('.svg-link-right').attr('class', 'svg-link-right active-block');
});

});
