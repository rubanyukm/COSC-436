/* Add the following features to the
page. When the page starts/loads, the quote near the left margin is randomly chosen. The quote
is not fixed. The quote is randomly chosen from ten favorite quotes of yours. The current time is
shown near upper right corner. The time shows hours, minutes, and seconds separated by colons.
The time is updated every ten seconds using an animation loop. Use appropriate css style for
quote and time. */

var interval = setInterval(time, 10000);

function time() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var time = h + ":" + m + ":" + s;
    document.getElementById("time").innerHTML = time;
}

function quote() {
    var quotes = ["There is nothing impossible to him who will try", "Who dares wins", "The journey of a thousand miles begins with one step", "That which does not kill us makes us stronger", "You must be the change you wish to see in the world", 
    "You only live once, but if you do it right, once is enough", "Tough times never last but tough people do", "Tis better to have loved and lost than to have never loved at all", "Whether you think you can or you think you can’t, you’re right", "A man is but what he knows"];
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = randomQuote;
}

window.onload = function() {
    time();
    quote();
}


