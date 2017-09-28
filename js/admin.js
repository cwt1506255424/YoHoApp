$('main')[0].onscroll = function() {
    var num=$(".collect").offset().top/50;
    switch (true){
        case num>=2.46:$("header")[0].style.backgroundColor = "rgba(0,0,0,0)";break;
        case num<=2.46:$("header")[0].style.backgroundColor = "rgba(0,0,0,1)";break;
    }
}
