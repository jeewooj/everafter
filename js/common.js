jQuery(document).ready(function ($) {
    // 메인 슬라이드
    var swiper = new Swiper('.mainSwiper', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 50,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">0' + (index + 1) + '</span>';
          },
        },
    })

    // 헤더동작
    $('.btn_cls').on('click', function(){
        $(this).toggleClass('on');
        $('.header').toggleClass('on');
    })

    // 로고동작
    $('.logo').on('mouseenter', function(){
        $(this).addClass('on');
        $(this).on('mouseleave', function(){
            $(this).removeClass('on');
        })
    })




});
