// main.js
$(function(){
    console.log(111);
    // 2단계 메뉴
    $('header nav .depth1 > li').hover(
        function(){
            // 마우스 올라갔을 때
            $(this).children('.depth2').addClass('active');
        },
        function(){
            //  마우스 나갔을 때
            $(this).children('.depth2').removeClass('active');
        }
    );

    // 이미지 슬라이더
    let num = 0; // 이미지 번호
    let width = 800; // 이미지 가로 크기

    $('.slider .sliders')
        .css('transform', `translateX(${-num * width}px)`);
});