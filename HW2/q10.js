
function myReverse(str) {

    let words = str.split(" ");

    let newWords = [];

    for (let i = 0; i < words.length; i++) {

        if (i % 2 == 0) {

            newWords.push(words[i]);

        }

        else {

            newWords.push(words[i].split("").reverse().join(""));

        }

    }

    return newWords.reverse().join(" ");

}

console.log(myReverse("tree is big green"));