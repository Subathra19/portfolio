$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    //Toggle navigation bar
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
    });
});
