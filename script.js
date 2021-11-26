// Testimonials carousel
$(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
        0:{
            items:1
        }
    }
});
   //TESTIMONIAL SLIDER
   if ($(".ts-testimonial-slide").length > 0) {
    
    $(".ts-testimonial-slide").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 1000,
        navigation: false,
        pagination: true,
        singleItem: true
    });
};

$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    items: 1,
    stagePadding: 20,
    center: true,
    nav: false,
    margin: 50,
    dots: true,
    loop: true,
    responsive: {
    0: { items: 1 },
    480: { items: 2 },
    575: { items: 2 },
    768: { items: 2 },
    991: { items: 3 },
    1200: { items: 4 }
    }
    });
    });