
/* Write a function named fullName that takes a string as a parameter and decides whether it
is a full name of a person. The full name format is Prefix First M. Last. Prefix is Mr,
Mrs, or Ms. First is the first name that begins in upper case letter followed by one or more lower
case letters with a total length of at least two. M is the middle initial which is a single upper case
letter. Last is the last name which has the same format as the first name. There is a dot after the
middle initial. There is one space between prefix, first name, middle initial, and last name. The
function returns true/false. The code must be based on regular expressions. */

function fullName(name) {

    let reg = /(Mr|Mrs|Ms)\s[A-Z][a-z]+\s[A-Z][.]\s[A-Z][a-z]+/;

    return reg.test(name);

}

console.log(fullName("Mr John A Smith"));