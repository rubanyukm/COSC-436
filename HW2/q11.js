
function ApplyFunctionToArray(f, p) {

    for (let i = 0; i < p.length; i++) {

        p[i] = f(p[i]);

    }

    return p;

}