
function init() {
    document.getElementById("send").addEventListener("click", submit);
}

function submit() {
    let initial = document.getElementById("initial").value;
    let interest = document.getElementById("interest").value;
    let years = document.getElementById("years").value;

    if (initial == "" || interest == "" || years == "") {
        alert("Please enter all values");
    } else {
        let result = calculate(initial, interest, years);
        document.getElementById("result").innerHTML = "$"+result;
    }
}

function calculate(initial, interest, years) {
    let result = initial * ((1 + interest / 100) ** years);
    return result;
}

document.addEventListener("DOMContentLoaded", init);