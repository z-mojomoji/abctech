$(document).ready(function(){

    $(window).scroll(function() {

        //var sectionTwo = ($('section#box2').offset().top)-150;

        if ($(this).scrollTop() > 1){
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
    });

    $('a.topBtn').on('click', function(){
            $('html, body').animate({scrollTop : 0},800);
    });

});