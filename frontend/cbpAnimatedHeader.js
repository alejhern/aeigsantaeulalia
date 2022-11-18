var nav
var posSections
const idSections = ["#historia", "#agrupament", "#pea", "#branques", "#calendari", "#contacta"]
$(document).ready(function() {
  nav = $('nav').outerHeight(true)
  animarNav()
  actualizarPosSec()
  $(window).scroll(function() {
    nav = $('nav').outerHeight(true)
    animarNav()
  });
  //Al clicar sobre una sección del navbar la pagina hace scroll hasta la escogida
  $("a.page-scroll").click(function(e) {
    e.preventDefault()
    if ($('button.navbar-toggler').is(":visible")) {
      $('button.navbar-toggler').click()
    }
    var href = $(this).attr('href');
    if (href === "#page-top") {
      nav = 0
    } else if (screen.width <= 1200) {
      nav = $('nav').outerHeight(true) - $('#menu').outerHeight(true)
    }
    $('html,body').animate({
      scrollTop: $(href).position().top - nav + 1
    }, 2000);
  });
});
//función que da genera la amimacion del Nav
function animarNav() {
  actualizarPosSec()
  if (window.pageYOffset >= ($('#header-text').position().top - nav)) {
    $('.navbar-default').addClass('navbar-shrink');
  } else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
  for (var i = 0; i < Object.keys(posSections).length; i++) {
    if (window.pageYOffset >= posSections[idSections[i]] &&
      (window.pageYOffset < posSections[idSections[i + 1]] || i == 5) &&
      (window.pageYOffset > posSections[idSections[i - 1]] || i == 0)) {
      $('a[href="' + idSections[i] + '"]').parent().addClass('active')
    } else {
      $('a[href="' + idSections[i] + '"]').parent().removeClass('active')
    }
  }
}
//función que me actualiza las posiciones de las seccciones
function actualizarPosSec() {
  posSections = {}
  for (var i = 0; i < idSections.length; i++) {
    posSections[idSections[i]]=$(idSections[i]).position().top - nav
  }
}
