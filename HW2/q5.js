
function compoundInterest(p, r, n,) {

    let amount = p * ((1 + r / 100) ** n);

    return amount;
}

console.log(compoundInterest(1000, 10, 1));