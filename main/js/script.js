$(function(){
    $(".depth1 > li").mouseover(function(){
        $(this).find('.depth2').stop().slideDown(300);
    }).mouseleave(function(){
        $(this).find('.depth2').stop().slideUp(300);
    });

    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay:{delay:3000},
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".section > img").mouseover(function(){
        $(this).css('margin','-6px');
        $(this).css('border','6px solid #999');
    }).mouseleave(function(){
        $(this).css('margin','0px');
        $(this).css('border','none');
    });

    // 높이
    var h = ($(window).height()-$(".divPop").height())/2+$(window).scrollTop();
    var w = ($(window).width()-$(".divPop").width())/2+$(window).scrollLeft();
    $(".divPop").css({
        "top":h+"px",
        "left":w+"px"
    });

    $(".divPop").draggable();

    //console.log($('.menu').position().left);
    //console.log($('.menu').position().top);
    var q_left = $('.menu').position().left+1200;
    var q_top = $('.menu').position().top;
    $('.quickMenu').css({
        'top':q_top,
        'left':q_left
    });

    $(window).scroll(function() {
        //console.log($(window).scrollTop());
        var new_top = $(window).scrollTop()+q_top;
        // $('.quickMenu').css({
        //     'top':new_top
        // });
        $('.quickMenu').stop().animate({
            'top':new_top
        },500);
    });
    $(".board_title").click(function(){
        $('.board_title').removeClass('on');
        $(this).addClass('on');
        //console.log($(this).text());
        if ($(this).text()=='공지사항') {
            $('#board_notice').show();
            $('#board_data').hide();
        } else {
            $('#board_notice').hide();
            $('#board_data').show();
        }
    });
    $('#goTop').click(function(){
        $('html').animate({'scrollTop':0},200);
    });
});
