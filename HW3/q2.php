<?php
function tax($income, $maritalStatus) {

    $maritalStatus = strtolower($maritalStatus);
    $tax = 0;

    if($maritalStatus == "single" and $income < 30000) {
        $tax = $income * 0.2;
    } else if($maritalStatus == "single" and $income >= 30000) {
        $tax = $income * 0.25;
    } else if($maritalStatus == "married" and $income < 50000) {
        $tax = $income * 0.1;
    } else if($maritalStatus == "married" and $income >= 50000) {
        $tax = $income * 0.15;
    }

    return $tax;
}

echo tax(150000, "single");

?>