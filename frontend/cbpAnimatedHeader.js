$(document).ready(function() {
  const idSections = ["#historia", "#agrupament", "#proposta", "#branques", "#calendari", "#contacta"]
  animarNav(idSections)
  $(window).scroll(function() {
    animarNav(idSections)
  });
  $(window).resize(function() {
    animarNav(idSections)
  });
  $("a.page-scroll").click(function(e) {
    var href = $(this).attr('href');
    let nav
    if(href === "#page-top"){
     nav = 0
   } else if (screen.width <= 1200){
      nav = $('nav').innerHeight() - $('#menu').innerHeight()
      $('button.navbar-toggler').click()
    } else {
      nav = $('nav').innerHeight()
    }
    $('html,body').animate({
      scrollTop: $(href).offset().top - nav
    }, 2000);
    e.preventDefault()
  });
});

function animarNav(idSections) {
  var posSections = getPosSec()
  if (window.pageYOffset >= posSections[0] - $('nav').innerHeight()) {
    $('.navbar-default').addClass('navbar-shrink');
  } else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
  for (var i = 0; i < posSections.length; i++) {
    if (window.pageYOffset >= posSections[i] - $('nav').innerHeight()
     && (window.pageYOffset < posSections[i + 1] - $('nav').innerHeight() || i == 5)
     && (window.pageYOffset > posSections[i - 1] - $('nav').innerHeight() || i == 0)) {
      $('a[href="' + idSections[i] + '"]').parent().addClass('active')
    } else {
      $('a[href="' + idSections[i] + '"]').parent().removeClass('active')
    }
  }
}

function getPosSec(){
  var posSections = [$('#historia').position().top,
    $('#agrupament').position().top,
    $('#proposta').position().top,
    $('#branques').position().top,
    $('#calendari').position().top,
    $('#contacta').position().top
  ]
  return posSections
}
