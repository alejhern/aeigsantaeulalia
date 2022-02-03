var nav
var posSections
const idSections = ["#historia", "#agrupament", "#proposta", "#branques", "#calendari", "#contacta"]
$(document).ready(function() {
  nav = $('nav').innerHeight()
  animarNav()
  actualizarPosSec()
  $(window).scroll(function() {
    nav = $('nav').innerHeight()
    animarNav()
  });
  //Al clicar sobre una sección del navbar la pagina hace scroll hasta la escogida
  $("a.page-scroll").click(function(e) {
    e.preventDefault()
    var href = $(this).attr('href');
    if (href === "#page-top") {
      nav = 0
    } else if (screen.width <= 1200) {
      nav = $('nav').innerHeight() - $('#menu').innerHeight()
      $('#button.navbar-toggler').click()
    }
    $('html,body').animate({
      scrollTop: $(href).position().top - nav
    }, 2000);
  });
});
//función que da genera la amimacion del Nav
function animarNav() {
  actualizarPosSec()
  if (window.pageYOffset >= posSections[0]) {
    $('.navbar-default').addClass('navbar-shrink');
  } else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
  for (var i = 0; i < posSections.length; i++) {
    if (window.pageYOffset >= posSections[i]
       && (window.pageYOffset < posSections[i + 1] || i == 5)
        && (window.pageYOffset > posSections[i - 1] || i == 0)) {
      $('a[href="' + idSections[i] + '"]').parent().addClass('active')
    } else {
      $('a[href="' + idSections[i] + '"]').parent().removeClass('active')
    }
  }
}
//función que me actualiza las posiciones de las seccciones
function actualizarPosSec() {
  posSections = [$('#historia').position().top - nav,
    $('#agrupament').position().top - nav,
    $('#proposta').position().top - nav,
    $('#branques').position().top - nav,
    $('#calendari').position().top - nav,
    $('#contacta').position().top - nav
  ]
}
