
var mySwiper = new Swiper ('.flash1', {
    loop: true,
    autoplay: 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable:true,
    // 如果需要滚动条
})
var mySwiper = new Swiper ('.flash2', {
    loop: true,
    autoplay: 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable:true,
    // 如果需要滚动条
})
var mySwiper = new Swiper ('.flash3', {
    loop: true,
    autoplay: 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable:true,
    // 如果需要滚动条
})
var mySwiper = new Swiper ('.flash4', {
    loop: true,
    autoplay: 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable:true,
    // 如果需要滚动条
})

$("#unwind").click(function(){
    if($("#all").css("left")==0){
        $("#sideon").css("display","none");
    }
    $("#sidedoor").css("left","0rem");
    $("#all").css("left","66.6667%");
    $("#sideon").css("display","block");
})
$("#sideon").click(function(){
    $("#sidedoor").css("left","-68%");
    $("#all").css("left","0");
    $("#sideon").css("display","none");
})
$("#sideon").on("touchmove",function(){
    if($("#all").css("left")<"66.6667%"){
        $("#sideon").css("display","none")
        $("#sidedoor").css("left","-68%");
    }
});
$("#sideon").on("touchend",function(){
    $("#all").css("left","0");
    $("#sideon").css("display","none");
    $("#sidedoor").css("left","-68%");
});
$("main").scroll(function(){
    if($(".tag1").offset().top<=0){
        $(".back-top").css("display","block");
    }else{
        $(".back-top").css("display","none");
    }
})
$(".back-top").click(function(){
    $("main").scrollTop(0);
})
