
/* Write a class called Student. The class has two properties called name and gpa. The class
has a constructor that takes a name and a gpa and set them to the properties of the class. The
class getName, getGpa, setName, and setGpa methods that get and set name and gpa. The
class has isHonors method which returns true/false depending on whether gpa is above
or below 3. The class has toString method that returns a string containing name and gpa. */

class Student {

    constructor(name, gpa) {

        this.name = name;

        this.gpa = gpa;

    }

    getName() {

        return this.name;

    }

    getGpa() {

        return this.gpa;

    }

    setName(name) {

        this.name = name;

    }

    setGpa(gpa) {

        this.gpa = gpa;

    }

    isHonors() {

        if (this.gpa >= 3) {

            return true;

        }

        return false;

    }

    toString() {

        return this.name + " " + this.gpa;

    }

}

let student1 = new Student("John", 3.5);

console.log(student1.getName());

console.log(student1.getGpa());

console.log(student1.isHonors());

console.log(student1.toString());