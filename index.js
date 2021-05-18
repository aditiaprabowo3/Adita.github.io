$(window).scroll(function () {
    if($(window).scrollTop () ) {
        $(".navbar").addClass("fixed");
    }
    else {
        $(".navbar").removeClass("fixed");
    }
});

// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1100:{
                items: 3
            },
            1000:{
                items:4
            }
        }
    });
});