
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

console.log(tax(5000000, "married"));