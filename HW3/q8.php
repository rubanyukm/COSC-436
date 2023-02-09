
<?php

function university($str) {
    $pattern = "/E-0[0-9]{2}[a-z]{1}-9[a-f]{2}[0-9]{1}/";
    if(preg_match($pattern, $str)) {
        return true;
    } else {
        return false;
    }

}

function phone($str) {
    $pattern = "/(313|248|734)-[0-9]{3}-[0-9]{4}/";
    if(preg_match($pattern, $str)) {
        return true;
    } else {
        return false;
    }
}

?>
