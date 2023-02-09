
<?php

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

?>
