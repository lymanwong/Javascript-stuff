<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
  $hero = ucwords($_GET['hero']);
  $heroArray = array('Captain America', 'Spiderman', 'Superman', 'Batman', 'Aquaman', 'Robin', 'Flash');
  if(in_array($hero, $heroArray))
    echo 'We have '.$hero.' comics!';
  elseif($hero == '')
    echo 'Enter a hero name.';

  else
    echo 'Sorry, we do not have '.$hero.' comics.';
echo '</response>';
?>
