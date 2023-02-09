



function factors(n) {

    let factorsStr = "";

    for (let i = 0; i <= n; i++) {

        if(n % i == 0) {

            factorsStr += i + ", ";

        }

    }

    return factorsStr;
}

let num = 100;
let factorsOfNum = factors(num);


console.log("The factors of " + num + " are: " + factorsOfNum);