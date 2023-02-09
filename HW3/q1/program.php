<?php
// function 1 that calculates the factors
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

// function 2 that calculates the amount of tax needed to be paid
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

// function 3 that calculates the stand deviation of a number array
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

// function 4 that calcualtes the compound interest based on a principal, rate, and number of years
function compoundInterest($p, $r, $n) {

    $amount = $p * (1 + $r/100) ** $n;

    return $amount;

}

// function 5 that creates a user ID and password based on their last and first names
function createIdPassword($lastName, $firstName) {

    $id = substr($firstName, 0, 1) .$lastName;
    $password = substr($firstName, 0, 1) .substr($firstName, -1) .substr($lastName, 0, 3) .strlen($firstName ).strlen($lastName);

    $id = strtoupper($id);
    $password = strtoupper($password);

    return array("ID" => $id, "Password" => $password);

}

// function 6 that removes duplicate values from an array
function removeDuplicates($array) {

    $newArray = array();

    foreach($array as $value) {
        if(!in_array($value, $newArray)) {
            $newArray[] = $value;
        }
    }

    return $newArray;

}

// a student calss with getters and setters for gpa and name and a function to verify whether the student is an honnors student or not
class Student {

    private $name;
    private $gpa;

    function __construct($name, $gpa) {
        $this->name = $name;
        $this->gpa = $gpa;
    }

    function getName() {
        return $this->name;
    }

    function getGpa() {
        return $this->gpa;
    }

    function setName($name) {
        $this->name = $name;
    }

    function setGpa($gpa) {
        $this->gpa = $gpa;
    }

    function isHonors() {
        if($this->gpa >= 3) {
            return true;
        } else {
            return false;
        }
    } 
}

// 2 functions that verify whether the inputted university ID and phone number are valid using regex
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