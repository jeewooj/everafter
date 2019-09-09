jQuery(document).ready(function ($) {
    // 포폴 미리보기 페이지
    /* // html 있을 경우
    var pf_li = $('.pf_wrapper li');
    var pf_max = pf_li.length - 1;
    for(var i=0; i<pf_max; i++){
        pf_li[i].onclick = function(){
            $(this).removeClass('on');
            $(this).next('li').addClass('on');
        };
    }*/

    // 포폴 img 불러오기
    for(var i=0; i<=max; i++){
        $('.pf_wrapper ul').append('<li><img src="../imgs/pf/' + pf_name + (i+1) +'.png" alt="' + pf_alt + '"></li>');
    }
    function first_on(){
        $('.pf_wrapper li:first').addClass('on');
    };
    first_on();

    // 다음 페이지로
    $('.pf_wrapper li').on('click', function(){
        if ($('.pf_wrapper').find('li.on').index() !=max){
            $(this).removeClass('on');
            $(this).next('li').addClass('on');
        }
    });

    // 전 페이지로
    $('.btn_back').on('click', function(){
        var li_on = $('.pf_wrapper').find('li.on');
        if (li_on.index() != 0){
            li_on.removeClass('on').prev('li').addClass('on');
        }
    })
    // 처음 페이지로
    $('.btn_first').on('click', function(){
        $('.pf_wrapper li').removeClass('on');
        first_on();
    })

    // 버튼영역 dialog
    $( "#dialog" ).dialog({
        position: { my: "left bottom", at: "left bottom", of: window }
      });
});
