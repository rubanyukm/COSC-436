
function init() {
    document.getElementById("send").addEventListener("click", submit);
}

function submit() {
    let credits = document.getElementById("credits").value;
    let studentStatus = document.getElementsByName("studentStatus");
    let residency = document.getElementsByName("resStatus");
    let dormStatus = document.getElementById("dorm");
    let diningStatus = document.getElementById("dining");
    let parkingStatus = document.getElementById("parking");
    let undergrad = false;
    let grad = false;
    let inState = false;
    let outState = false;

    if (studentStatus[0].checked) {
        undergrad = true;
        grad = false;
    }
    else if (studentStatus[1].checked) {
        undergrad = false;
        grad = true;
    }

    if (residency[0].checked) {
        inState = true;
        outState = false;
    }
    else if (residency[1].checked) {   
        inState = false;
        outState = true;
    }    

    if (credits == "" || studentStatus == "" || residency == "") {
        alert("Please enter all values");
    } else {
        let result = calculate(credits, undergrad, grad, inState, outState, dormStatus, diningStatus, parkingStatus);
        document.getElementById("result").innerHTML = "$"+result;
    }

}

function calculate(credits, undergrad, grad, inState, outState, dormStatus, diningStatus, parkingStatus) {
    let tuition = 0;

    if (undergrad && inState) {
        tuition = 200 * credits;
    }
    else if (undergrad && outState) {
        tuition = 400 * credits;
    }
    else if (grad && inState) {
        tuition = 300 * credits;
    }
    else if (grad && outState) {
        tuition = 600 * credits;
    }

    if (dormStatus.checked) {
        tuition += 1000;
    }

    if (diningStatus.checked) {
        tuition += 500;
    }

    if (parkingStatus.checked) {
        tuition += 200;
    }

    return tuition;
}

document.addEventListener("DOMContentLoaded", init);