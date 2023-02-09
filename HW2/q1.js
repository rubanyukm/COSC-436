
let a, b, c;

a = 10;
b = 20;
c = 30;

function middle(a, b, c) {

    let middle;

    if ((a < b && b < c) || (c < b && b < a)) {

        middle = b;

    } else if ((b < a && a < c) || (c < a && a < b)) {

        middle = a;

    } else {
            
        middle = c;
    
    }

    document.getElementById('testP').innerText = "The middle number is " + middle;
}

middle(a, b, c);
