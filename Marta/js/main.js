$(function(){
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass:'header-dots',
        autoplay: 3000,
        responsive: [
            {
              breakpoint: 449,
              settings: {
                vertical: false,
                dots: false
              }
            }
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.nav__list').slideToggle();
    });
});