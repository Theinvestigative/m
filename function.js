$(".mask").click(function(){
    closePoup()
});

$('.navbar-toggle').click(function(e) {
    e.preventDefault();
    $(".nav-menu-main").toggle();
});

function closePoup(){
    $(".mask").css({'display':'none'})
    $(".mask-bg").css({'display':'none'})
}