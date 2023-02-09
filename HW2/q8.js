
function removeDuplicates(strings) {

    uniq = [...new Set(strings)];

    return uniq;

}

console.log(removeDuplicates(["a", "b", "a", "c", "a", "b", "d"]));