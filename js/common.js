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

    // 포폴 오픈페이지 - 필터
    $('.tab_menu li').on('click', function(){
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        if($(this).index() === 0 || $(this).is(':nth-child(1)')){
            $('.pfArea').show();
        }
        if($(this).index() === 1 || $(this).is(':nth-child(2)')){
            $('.pfArea').hide();
            $('.pfArea').find('.pc').parents('.pfArea').show();
            $('.pfArea').find('.tb').parents('.pfArea').show();
        }
        if($(this).index() === 2 || $(this).is(':nth-child(3)')){
            $('.pfArea').hide();
            $('.pfArea').find('.mb').parents('.pfArea').show();
        }
        if($(this).index() === 3 || $(this).is(':nth-child(4)')){
            $('.pfArea').hide();
            $('.pfArea').find('.responsive').parents('.pfArea').show();
        }
        
    })


});
