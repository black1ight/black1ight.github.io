$(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        dotsClass:'header-dots',
        appendDots:$('.header-content'),
        autoplay: 3000
    });
    
    
    $('.header-btn').on('click', function(){
        $('.menu').addClass('active'); 
    });
    
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
});