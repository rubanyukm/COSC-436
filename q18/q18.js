
/*  Repeat the id/password question with the following changes. When the mouse moves over an
input box, a dynamic message indicating the format of that input appears on the right. When the
mouse moves out of a box, its dynamic message disappears. When a box becomes focused its
background becomes white. There is no submit button to calculate the id and password.
Whenever a change event occurs in a box, the inputs from all three boxes are read and checked
for errors. If there is an error then the background of the corresponding box changes to red, and
the id and password are not displayed. If there are no errors then the id and password are
displayed. When an error is corrected in a box its background becomes white. When the id and
password are displayed, the backgrounds of all boxes are white and there are no messages. */


function submit() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let phone = document.getElementById("phone").value;
    let reg = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

    if (first == "" || last == "" || phone == "") {
        alert("Please enter all values");
    } 
    else if (!reg.test(phone)) {
        
        document.getElementById("phoneCheck").style.color = "red";
        document.getElementById("phoneCheck").innerHTML = "Phone number is not valid needs to be in the format xxx-xxx-xxxx";
        document.getElementById("password").innerHTML = "";
        document.getElementById("userID").innerHTML = "";
    }
    else {
        let passResult = passwordGenerator(first, last);
        document.getElementById("password").innerHTML = passResult;
        let userIDResult = idGenerator(first, last);
        document.getElementById("userID").innerHTML = userIDResult;
        document.getElementById("phoneCheck").style.color = "black";
        document.getElementById("phoneCheck").innerHTML = "";
    }
}

function passwordGenerator(first, last) {

    let pass = first[0] + first.slice(-1) + last.substring(0, 3) + first.length + last.length;

    pass = pass.toUpperCase();

    return pass;

}

function idGenerator(first, last) {

    let ID = first[0] + last;

    ID = ID.toUpperCase();

    return ID;
}

function lastNameOver() {
    label = document.getElementById("lastNameExample");
    label.innerText = "Lastname";
    input = document.getElementById("last");
    input.style.backgroundColor = "white";
}

function firstNameOver() {
    label = document.getElementById("firstNameExample");
    label.innerText = "Firstname";
    input = document.getElementById("first");
    input.style.backgroundColor = "white";
}

function phoneOver() {
    label = document.getElementById("phoneExample");
    label.innerText = "xxx-xxx-xxxx";
    input = document.getElementById("phone");
    input.style.backgroundColor = "white";
}

function mouseLeavesPhone() {
    label = document.getElementById("phoneExample");
    label.innerText = "";
    input = document.getElementById("phone");
    input.style.backgroundColor = "coral";
    
}

function mouseLeavesLast() {
    label = document.getElementById("lastNameExample");
    label.innerText = "";
    input = document.getElementById("last");
    input.style.backgroundColor = "coral";
}

function mouseLeavesFirst() {
    label = document.getElementById("firstNameExample");
    label.innerText = "";
    input = document.getElementById("first");
    input.style.backgroundColor = "coral";
}
