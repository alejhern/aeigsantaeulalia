$(document).ready(function() {
  var idSections = ["#historia", "#agrupament", "#proposta", "#branques", "#calendari", "#contacta"]
  var posSections = [$('#historia').position().top,
  $('#agrupament').position().top,
  $('#proposta').position().top,
  $('#branques').position().top,
  $('#calendari').position().top,
  $('#contacta').position().top]
  $(window).scroll(function() {
    if (window.pageYOffset >= 500) {
      $('.navbar-default').addClass('navbar-shrink');
    } else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
    for (var i = 0; i < posSections.length; i++) {
      if(window.pageYOffset >= posSections[i]
          && (window.pageYOffset < posSections[i+1] || i == 5)
           && (window.pageYOffset > posSections[i-1] || i == 0)){
        $('a[href="'+idSections[i]+'"]').parent().addClass('active')
      } else {
        $('a[href="'+idSections[i]+'"]').parent().removeClass('active')
      }
    }
  });
  $("a.page-scroll").click(function(e) {
    var href = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(href).offset().top
    }, 2000);
    e.preventDefault()
  });
});
