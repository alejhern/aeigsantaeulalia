var timelineSwiper = new Swiper(".timeline .swiper-container", {
  direction: "horizontal",
  loop: false,
  speed: 1600,
  pagination: ".swiper-pagination",
  paginationBulletRender: function (swiper, index, className) {
    var year = document
      .querySelectorAll(".swiper-slide")
      [index].getAttribute("data-year");
    return '<span class="' + className + '">' + year + "</span>";
  },
  paginationClickable: true,
  nextButton: ".swiper-button-next"
});
$(document).ready(function() {
  setInterval(moverLineaTiempo,5000)
  function moverLineaTiempo(){
    console.log($('.swiper-pagination-bullet-active').text());
    if($('.swiper-pagination-bullet-active').text() != $('.swiper-pagination-bullet:last-child').text()){
      $('.swiper-button-next').click()
    } else {
      $('.swiper-pagination-bullet:first-child').click()
    }
  }
});
