$("#unwind").click(function(){
    $("#sidedoor").css("left","0rem");
    $("#all").css("left","66.6667%");
    $("#sideon").css("display","block");
})
$("#sideon").click(function(){
    $("#sidedoor").css("left","-68%");
    $("#all").css("left","0");
    $("#sideon").css("display","none");
})
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

