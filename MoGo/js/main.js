$(function(){

    $('.accordion__header--1').click(function(){
        $('.accordion__content-text--1').slideToggle();
        $('.accordion__header--1').toggleClass('active');
    });

    $('.accordion__header--2').click(function(){
        $('.accordion__content-text--2').slideToggle();
        $('.accordion__header--2').toggleClass('active');
    });

    $('.accordion__header--3').click(function(){
        $('.accordion__content-text--3').slideToggle();
        $('.accordion__header--3').toggleClass('active');
    });


    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows: false
              }
            }
          ]
    });

    $('.burger-btn').click(function(){
        $('.burger-btn').toggleClass('active');
        $('.nav').slideToggle();
    });
});