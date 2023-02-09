
function init() {
    document.getElementById("send").addEventListener("click", submit);
}

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

document.addEventListener("DOMContentLoaded", init);
