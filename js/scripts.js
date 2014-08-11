$(document).ready(function(){
    
    var windowHeight = $(window).height();
    
    $('.logo-height').css({
        'height': $('#logo-img').height()
    });

    $('.vertical-center').css({
        'margin-top': (windowHeight / 2)
    });
    
    $('.full-window-height').css({'height':windowHeight});
    $(window).resize(function(){$('.full-window-height').css({'height':(windowHeight)});});

    $('.peak-window-height').css({'height':windowHeight-(windowHeight/8)});
    $(window).resize(function(){$('.peak-window-height').css({'height':windowHeight-(windowHeight/8)});});
    
});