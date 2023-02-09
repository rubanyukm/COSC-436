
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
