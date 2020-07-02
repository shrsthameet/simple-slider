$(document).ready(function () {
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fa fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right right-arrow"></i>',
    });
});