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

    setInterval(function(){
        num = num + 1;
        if(num > 2) {
            num = 0;
        }
        console.log(num);
        $('.slider .sliders')
        .css('transform', `translateX(${-num * width}px)`);
    }, 3000)

});


// tab 버튼
$(function(){
    // 공지사항 버튼을 클릭하면 tab-content1 active
    $('.btn-group a:first-child').click(function(){
        // 기존 tab-content들의 class 삭제
        $('.content > div').removeClass('active');
        $('#tab-content1').addClass('active');

        // 버튼 선택 효과
        $('.btn-group a').removeClass('active');
        $('.btn-group a:first-child').addClass('active');
    })
    // 갤러리 버튼 클릭하면 tab-content2 active
    $('.btn-group a:last-child').click(function(){
        $('.content > div').removeClass('active');
        $('#tab-content2').addClass('active');

        // 버튼 선택 효과
        $('.btn-group a').removeClass('active');
        $('.btn-group a:last-child').addClass('active');
    })
})