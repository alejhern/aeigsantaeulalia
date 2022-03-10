$(document).ready(function() {
  $('#formContacta').submit(function(e) {
    e.preventDefault();
    $.post('./backend/sendMail.php', {
        'name': $("#name").val(),
        'email': $("#email").val(),
        'telephone': $("#mobile").val(),
        'subject': $("#subject").val(),
        'message': $("#message").val(),
        'g-recaptcha-response': $('#g-recaptcha-response').val(),
      },
      function(resp, status) {
      });
  });
});
