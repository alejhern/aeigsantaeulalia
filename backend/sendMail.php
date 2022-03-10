<?php
$errors = [];
//Validando Captcha
$response = $_POST["g-recaptcha-response"];
if(!empty($response)){
  $secret = "6LcAkZkeAAAAAASVbahjs6V99tsx4VSRuyQiLude";
  $ip = $_SERVER['REMOTE_ADDR'];
  $respuestaValidación = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response&remoteip=$ip");
  $jsonResponde = json_decode($respuestaValidación);
  if(!$jsonResponde->success){
    //Google ha detectado que se trata de un proceso no humano
	  header("location:index_".$_POST['idioma'].".html?mensaje=humanCaptcha");
  }
}else{
    //si entra aquí significa que no se ha pulsado el Captcha
    $errors['Captcha']="Has de marcar la casilla de recaptcha";
}
//si no hay errores se envia el correo con los datos del nuevo socio
if (empty($errors)){
  $email_from = "santaeulalia@escoltesiguies.cat";
  $email_to = "santaeulalia@escoltesiguies.cat";
  $email_subject = $_POST['subject'];

  $email_message = "Detalls del formulari de soci:\n\n";
  $email_message .= "Nom: " . $_POST['name'] . "\n";
  $email_message .= "Correu Electrònic: " . $_POST['email'] . "\n";
  $email_message .= "Telèfon: " . $_POST['telephone'] . "\n\n";
  $email_message .= $_POST['message'];

  $headers = 'From: '.$email_from;
  @mail($email_to, $email_subject, $email_message,$headers);
  echo "¡El formulario se ha enviado con éxito!";
} else {
  echo json_encode($errors);
}
?>
