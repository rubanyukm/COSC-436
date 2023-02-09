
<?php

/*
Write a function named stdDev that computes the standard deviation of a set of numbers.
The function takes the numbers in an array parameter and returns the standard deviation. The
standard deviation of n numbers x1, x2 . . . xn is the square root of [((x1-m)2 +
(x2-m)2 + . . . + (xn-m)2)/n] where m is the average of the numbers. If there are
less than two numbers the standard deviation is 0.
*/

function stdDev($numArray) {

    $sum = 0;
    $count = 0;
    $average = 0;
    $sumOfSquares = 0;
    $stdDev = 0;

    foreach($numArray as $num) {
        $sum += $num;
        $count++;
    }

    if($count < 2) {
        return 0;
    }

    $average = $sum / $count;

    foreach($numArray as $num) {
        $sumOfSquares += pow($num - $average, 2);
    }

    $stdDev = sqrt($sumOfSquares / $count);

    return $stdDev;

}

echo stdDev(array(1, 2, 3, 4, 5));

?>
