<?php


$recepient = "wms-nik@mail.ru";
$sitename = "WEB2COM.RU";

$name = trim($_POST["NAME"]);
$phone = trim($_POST["EMAIL"]);
// $text = trim($_POST["question"]);
$message = "Имя: $name \nТелефон: $phone \nВопрос: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient")
 ?>
<!-- .mobile-form
.amenities__form
.h-form -->
