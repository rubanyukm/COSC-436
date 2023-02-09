
function createIdPassword(lastName, firstName) {

    let password = {id:"", password:""};

    let ID = firstName[0] + lastName;

    let pass = firstName[0] + firstName.slice(-1) + lastName.substring(0, 3) + firstName.length + lastName.length;

    pass = pass.toUpperCase();

    ID = ID.toUpperCase();

    password.id = ID;

    password.password = pass;

    return password;

}

console.log(createIdPassword("Maxwell", "John"));
