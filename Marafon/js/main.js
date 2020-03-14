$(function(){
    $('.review-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
        {
            breakpoint: 892,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        }
        ]
    });
    
    $('.nav__btn').on('click', function(){
        $('.nav__list').slideToggle();
    });

});

