// banner.js
$(document).ready(function(){
    $('.slider').slick({
      dots: true,
      infinite: true, // Asegúrate de que esta opción esté en true
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000, // Ajusta la velocidad en milisegundos
      prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',
      nextArrow: '<button type="button" class="slick-next">&#9655;</button>'
    });
  });