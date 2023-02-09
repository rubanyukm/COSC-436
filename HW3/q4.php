
<?php

function compoundInterest($p, $r, $n) {

    $amount = $p * (1 + $r/100) ** $n;

    return $amount;

}

echo compoundInterest(1000, 5, 2);

?>