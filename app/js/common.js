$(function() {
    $('.slider').owlCarousel({
        loop: true,
        items: 1,
        //nav: true,
        //navText: ["<i class='fa fa-angle-left fa-5x' aria-hidden='true'></i>", "<i class='fa fa-angle-right fa-5x' aria-hidden='true'></i>"],
        dots: true,
        autoplay: true,
        smartSpeed: 3000,
        slideSpeed: 100,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });
});
