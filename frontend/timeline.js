//generador del widget linea de tiempo
var timelineSwiper = new Swiper(".timeline .swiper-container", {
  direction: "horizontal",
  loop: false,
  speed: 1000,
  pagination: ".swiper-pagination",
  paginationBulletRender: function(swiper, index, className) {
    var year = document
      .querySelectorAll(".swiper-slide")[index].getAttribute("data-year");
    return '<span class="' + className + '">' + year + "</span>";
  },
  paginationClickable: true,
  nextButton: ".swiper-button-next"
});
//variable que controla si el usuario ha seleccionado una fecha y aumenta el tiempo para pasar de diapositiva
var isPicked = false
$(document).ready(function() {
  $('.swiper-pagination-bullet').click(function() {
    isPicked = true
  })
  setInterval(moverLineaTiempo, 6000)
  //función que hace que el carrousel linea de tiempo se mueva automaticamente
  function moverLineaTiempo() {
    if (isFocus()) {
      if (!isPicked) {
        if ($('.swiper-pagination-bullet-active').text() != $('.swiper-pagination-bullet:last-child').text()) {
          $('.swiper-button-next').click()
        } else {
          $('.swiper-pagination-bullet:first-child').click()
        }
      } else {
        isPicked = false;
      }
    }
  }
});
// Esta funcón sirve para determinar si lo que se muestra por pantalla es la linea temporal
function isFocus() {
  //el array posSections esta declarado en ./cbpAnimatedHeader.js
  if (window.pageYOffset >= posSections[0] && window.pageYOffset <= posSections[1]) {
    return true
  } else {
    return false
  }
}
