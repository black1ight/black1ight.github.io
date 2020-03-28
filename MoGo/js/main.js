$(function () {

    $('.accordion__header--1').click(function () {
        $('.accordion__content-text--1').slideToggle();
        $('.accordion__header--1').toggleClass('active');
    });

    $('.accordion__header--2').click(function () {
        $('.accordion__content-text--2').slideToggle();
        $('.accordion__header--2').toggleClass('active');
    });

    $('.accordion__header--3').click(function () {
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

    $('.burger-btn').click(function () {
        $('.burger-btn').toggleClass('active');
        $('.nav').slideToggle();
        $('.nav__link').removeClass('active');
    });



    $('#mine').click(function () {
        $('.nav__link#mine').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function () {
            window.location = href,
                $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#about-link').click(function () {
        $('.nav__link#about-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function () {
            window.location = href,
                $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#service-link').click(function () {
        $('.nav__link#service-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function () {
            window.location = href,
                $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#work-link').click(function () {
        $('.nav__link#work-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function () {
            window.location = href,
                $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#blog-link').click(function () {
        $('.nav__link#blog-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function () {
            window.location = href,
                $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });
    $('#contact-link').click(function () {
        $('.nav__link#contact-link').addClass('active');
        var href = $(this).attr('href');
        setTimeout(function () {
            window.location = href,
                $('.nav').css("display", "none");
            $('.burger-btn').removeClass('active');
        }, 1000);
        return false;
    });


    var element = $('.about__item--2');
    $counter = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + $(window).height();
        var offset = element.offset().top;

        if (scroll > offset && $counter == 0) {
            $('.burger-btn').addClass('black');
            $counter = 1;
        }
    });


});



