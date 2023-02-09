
<?php

function removeDuplicates($array) {

    $newArray = array();

    foreach($array as $value) {
        if(!in_array($value, $newArray)) {
            $newArray[] = $value;
        }
    }

    return $newArray;

}

?>