
/* Write a function named university that takes a string as a parameter and decides whether
it is a valid university id. The university id format is E-0xxy-9yyx. Write a method named
phone that takes a string as a parameter and decides whether it is a valid phone number with
area code 313 or 248 or 734. The phone number format is xxx-xxx-xxxx. Here x is a digit
and y is a lower case letter. These functions return true/false. The code must be based on
regular expressions. */

function university(id) {

    let reg = /E-0[0-9][0-9][a-z]-9[a-z][a-z][0-9]/;

    return reg.test(id);

}

function phone(num) {

    let reg = /(313|248|734)-[0-9]{3}-[0-9]{4}/;

    return reg.test(num);

}

console.log(university("E-012a-9aa3"));

console.log(phone("313-123-1234"));