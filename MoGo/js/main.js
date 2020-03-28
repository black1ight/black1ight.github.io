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
        $('.nav__link').removeClass('active');
    });

    $('#about').click(function(){
        $('.nav__link#about').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });
    $('#service').click(function(){
        $('.nav__link#service').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });
    $('#work').click(function(){
        $('.nav__link#work').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });
    $('#blog').click(function(){
        $('.nav__link#blog').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });
    $('#contact').click(function(){
        $('.nav__link#contact').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {window.location = href}, 1000);
        return false;
    });

});

setTimeout(function () {
    // Ваш скрипт
    }, 1000); // время в мс
    