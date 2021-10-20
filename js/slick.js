$(function(){
    $(".img-gallery").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6, 
        prevArrow: '<button class="slick-arrow-prev"> <i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-arrow-next"><i class="fas fa-chevron-right"></i></button>',
        adaptiveHeight: true,
        variableWidth: true,
    })

    $(".watching").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6, 
        prevArrow: '<button class="slick-arrow-prev"> <i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-arrow-next"><i class="fas fa-chevron-right"></i></button>',
        adaptiveHeight: true,
        variableWidth: true,
    })
})



