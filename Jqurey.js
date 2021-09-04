





$(document).ready(function () {
    

    $(window).on('scroll load', function(){
            if($(window).scrollTop() >10){
                $('#header').addClass('header-active');
            }else{
                 $('#header').removeClass('header-active');   
            }
    });


    $('.fa-bars').click(function () { 
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function () { 
        $('fa-hamburger').removeClass("fa-times");
        $('nav').removeClass('nav-toggle');
        
     });

});