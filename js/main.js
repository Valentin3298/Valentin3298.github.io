$(function () {
  $(".slider_wrap, .sliderBot_wrappBot").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><i class="fas fa-angle-right"></i></button>',
    infinite: false,
  });
  $("input, select").styler();
});
