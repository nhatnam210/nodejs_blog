$('.slick-home').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnFocus: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    easing: 'linear',
    prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});
