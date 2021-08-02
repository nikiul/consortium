$('#results__carousel').owlCarousel({
    loop:true,
    margin: 40,
    center: true,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$('#weDo__carousel').owlCarousel({
    loop:true,
    margin: 40,
    center: true,
    autoHeight:false,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$(document).ready(function(){
    var heroCarousel = $("#cooperation__item");
    var facesCarousel1 = $("#faces-carousel1");
    var facesCarousel2 = $("#faces-carousel2");
    var methodCarousel = $("#method-carousel")

    function heroCarouselInit() {
        if($('body').children(heroCarousel) && $(window).width() < 1290){
            heroCarousel.owlCarousel({
                loop:true,
                margin: 20,
                center: false,
                dots: false,
                nav:true,
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1
                    },
                    856: {
                        items: 2  
                    }
                }
            });
        }else{
            heroCarousel.trigger('destroy.owl.carousel')
        }; 
    };

    function facesCarouselInit1() {
        if($('body').children(facesCarousel1) && $(window).width() < 790){
            facesCarousel1.owlCarousel({
                loop:true,
                margin: 20,
                center: false,
                dots: false,
                nav:true,
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:2
                    }
                }
            });
        }else{
            facesCarousel1.trigger('destroy.owl.carousel')
        }; 
    };
    
    function facesCarouselInit2() {
        if($('body').children(facesCarousel2) && $(window).width() < 790){
            facesCarousel2.owlCarousel({
                loop:true,
                margin: 20,
                center: false,
                dots: false,
                nav:true,
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:2
                    }
                }
            });
        }else{
            facesCarousel2.trigger('destroy.owl.carousel')
        }; 
    };

    function methodCarouselInit() {
        if($('body').children(methodCarousel) && $(window).width() < 790){
            methodCarousel.owlCarousel({
                loop:true,
                margin: 20,
                center: false,
                dots: false,
                nav:true,
                responsiveClass:true,
                responsiveBaseElement:"body",
                responsive:{
                    0:{
                        items:1
                    }
                }
            });
        }else{
            methodCarousel.trigger('destroy.owl.carousel')
        }; 
    };

    heroCarouselInit();
    facesCarouselInit1();
    facesCarouselInit2();
    methodCarouselInit();
    $(window).resize(function(){
        heroCarouselInit();
        facesCarouselInit1();
        facesCarouselInit2();
        methodCarouselInit();
    });
}); 