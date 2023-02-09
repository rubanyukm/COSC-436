<?php
function factors($a) {
    $factors = "";
    for ($i = 1; $i <= $a; $i++) {
        if ($a % $i == 0) {
            $factors .= $i .",";
        }
    }
    $factors = substr($factors, 0, -1);
    return $factors;
}

echo factors(20);
?>