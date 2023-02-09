
function middle(a, b, c) {

    let middle;

    if ((a < b && b < c) || (c < b && b < a)) {

        middle = b;

    } else if ((b < a && a < c) || (c < a && a < b)) {

        middle = a;

    } else {
            
        middle = c;
    
    }

    return middle;
}

function factors(n) {

    let factorsStr = "";

    for (let i = 0; i <= n; i++) {

        if(n % i == 0) {

            factorsStr += i + ", ";

        }

    }

    return factorsStr;
}

function tax(income, maritalStatus) {

    maritalStatus = maritalStatus.toLowerCase();

    let tax = 0;

    if (maritalStatus == "single" && income < 30000) {

        tax = income * 0.2;
    }    
    else if (maritalStatus == "single" && income >= 30000) {

        tax = income * 0.25;
    }
    else if (maritalStatus == "married" && income < 50000) {

        tax = income * 0.1;
    }
    else if (maritalStatus == "married" && income >= 50000) {

        tax = income * 0.15;
    }

    return "Your tax is $" + tax;
}

function stdDev() {
    
    let sum = 0;
    let mean = 0;
    let stdDev = 0;
    let n = arguments.length;

    for (let i = 0; i < n; i++) {

        sum += arguments[i];

    }

    mean = sum / n;

    for (let i = 0; i < n; i++) {

        stdDev += Math.pow(arguments[i] - mean, 2);

    }

    stdDev = Math.sqrt(stdDev / n);

    return stdDev;

}

function compoundInterest(p, r, n,) {

    let amount = p * ((1 + r / 100) ** n);

    return amount;
}

function charType(char) {

    if (char >= 'A' && char <= 'Z') {
        return 'upper';
    }
    else if (char >= 'a' && char <= 'z') {
        return 'lower';
    }
    else if (char >= '0' && char <= '9') {
        return 'digit';
    }
    else {
        return 'other';
    }
}

function createIdPassword(lastName, firstName) {

    let password = {id:"", password:""};

    let ID = firstName[0] + lastName;

    let pass = firstName[0] + firstName.slice(-1) + lastName.substring(0, 3) + firstName.length + lastName.length;

    pass = pass.toUpperCase();

    ID = ID.toUpperCase();

    password.id = ID;

    password.password = pass;

    return password;

}

function removeDuplicates(strings) {

    uniq = [...new Set(strings)];

    return uniq;

}

function mySort(arr1, arr2, arr3) {

    var temp1, temp2, temp3;

    for (var i = 0; i < arr1.length; i++) {

        for (var j = i + 1; j < arr1.length; j++) {

            if (arr1[i] > arr1[j]) {

            temp1 = arr1[i];

            arr1[i] = arr1[j];

            arr1[j] = temp1;

            temp2 = arr2[i];

            arr2[i] = arr2[j];

            arr2[j] = temp2;

            temp3 = arr3[i];

            arr3[i] = arr3[j];

            arr3[j] = temp3;

            }

        }

    }

    return {arr1, arr2, arr3};

}

function myReverse(str) {

    let words = str.split(" ");

    let newWords = [];

    for (let i = 0; i < words.length; i++) {

        if (i % 2 == 0) {

            newWords.push(words[i]);

        }

        else {
            
            newWords.push(words[i].split("").reverse().join(""));

        }

    }

    return newWords.reverse().join(" ");

}

function ApplyFunctionToArray(f, p) {

    for (let i = 0; i < p.length; i++) {

        p[i] = f(p[i]);

    }

    return p;

}

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

function university(id) {

    let reg = /E-0[0-9][0-9][a-z]-9[a-z][a-z][0-9]/;

    return reg.test(id);

}

function phone(num) {

    let reg = /(313|248|734)-[0-9]{3}-[0-9]{4}/;

    return reg.test(num);

}

function fullName(name) {

    let reg = /(Mr|Mrs|Ms)\s[A-Z][a-z]+\s[A-Z][.]\s[A-Z][a-z]+/;

    return reg.test(name);

}

