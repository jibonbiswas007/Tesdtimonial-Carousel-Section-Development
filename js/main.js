(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        smartSpeed:2000,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));