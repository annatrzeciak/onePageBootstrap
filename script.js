$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }]
    });
});
