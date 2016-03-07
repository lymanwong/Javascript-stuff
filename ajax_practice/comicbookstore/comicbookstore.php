<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
  $hero = strtolower($_GET['hero']);
  $heroArray = array('captain america', 'spiderman', 'superman', 'batman', 'aquaman', 'robin', 'flash');
  if(in_array($hero, $heroArray))
    echo 'We do have '.$hero.'comics!';
  elseif($hero == '')
    echo 'Enter a hero name.';
  else
    echo 'Sorry, we do not have '.$hero.'comics.';
echo '</response>';
?>
