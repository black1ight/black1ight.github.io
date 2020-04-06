$(function () {
    $('.header__slider').slick({
        infinite: true,
        autoplay: 4000,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-right.svg" alt="">',
        asNavFor: '.slider-dots'
    });

    $(window).on('resize orientationChange', function(event) {
      $('.slider-dots').slick('reinit'); });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
        responsive: [
          {
            breakpoint: 820,
            settings: "unslick"
          }
        ]
    });

    $('.burger-btn').on('click', function(){
      $('.header__aside, .burger-btn').toggleClass('active');
    });

    

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-right.svg" alt="">',
        asNavFor: '.slider-map'
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    });

    $('.holder-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrow-right.svg" alt="">'
    });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function(){
        let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
        $('.summ').html(summ);
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html(summ);

    // shop
    
    $('.board__dot-circle--1').on('click', function(){
      $('.dot-descr--1').slideToggle();
    });

    $('.board__dot-circle--1').click(function(){
      if (!$(this).data('status')) {
        $(this).html('-');
        $(this).data('status', true);
      }
      else {
        $(this).html('+');
        $(this).data('status', false);
      }
    });

    $('.board__dot-circle--2').on('click', function(){
      $('.dot-descr--2').slideToggle();
    });

    $('.board__dot-circle--2').click(function(){
      if (!$(this).data('status')) {
        $(this).html('-');
        $(this).data('status', true);
      }
      else {
        $(this).html('+');
        $(this).data('status', false);
      }
    });

    $('.board__dot-circle--3').on('click', function(){
      $('.dot-descr--3').slideToggle();
    });

    $('.board__dot-circle--3').click(function(){
      if (!$(this).data('status')) {
        $(this).html('-');
        $(this).data('status', true);
      }
      else {
        $(this).html('+');
        $(this).data('status', false);
      }
    });

});