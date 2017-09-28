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
var rights=$(".right").parent();
var right=$(".right span");
$(rights).each(function(a) {
    $(this).click(function () {
        $(".nav1-1").css("width","50%");
        $(".nav1-2").css("display","block");
        right.hide();
        right.eq(a).css("display","block")
    })
})
$(".nav1-2").on("touchstart",function(e){
    startX = e.originalEvent.changedTouches[0].pageX;
    startY = e.originalEvent.changedTouches[0].pageY;
    $(".nav1-2").on("touchmove",function(e){
        moveEndX = e.originalEvent.changedTouches[0].pageX;
        moveEndY = e.originalEvent.changedTouches[0].pageY;
        X = moveEndX - startX;
        Y = moveEndY - startY;
        if(X>0){
            $(".nav1-1").css("width","100%");
            $(".nav1-2").css("display","none");
            right.hide();
            console.log("右")
        }else{
            $(".nav1-2").css("display","block");
        }
    })
})
var sp1=$(".sp1");
var contains=$(".contain");
sp1.each(function(a){
    $(this).click(function(){
        sp1.css({"color":"#b8b8b8","font-size":".22rem"});
        $(this).css({"color":"#4d4d4d","font-size":".32rem"})
        contains.hide();
        contains.eq(a).css("display","block")
    })
})

