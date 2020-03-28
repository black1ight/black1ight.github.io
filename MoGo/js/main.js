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

    $('#about-link').click(function(){
        $('.nav__link#about-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {
            window.location = href,
            $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $('#service-link').click(function(){
        $('.nav__link#service-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {
            window.location = href,
            $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#work-link').click(function(){
        $('.nav__link#work-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {
            window.location = href,
            $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#blog-link').click(function(){
        $('.nav__link#blog-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {
            window.location = href,
            $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#contact-link').click(function(){
        $('.nav__link#contact-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function() {
            window.location = href,
            $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });

});

setTimeout(function () {
    // Ваш скрипт
    }, 1000); // время в мс
    