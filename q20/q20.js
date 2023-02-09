
var companies = ["https://about.google/", "https://www.meta.com/", "https://www.amazon.com/", "https://www.apple.com/", "https://www.microsoft.com/en-us/", 
"https://www.ibm.com/us-en/", "https://www.oracle.com/", "https://www.intel.com/content/www/us/en/homepage.html", "https://www.cisco.com/", "https://www.hp.com/us-en/home.html"];


function randomCompany() {
    var company = companies[Math.floor(Math.random() * companies.length)];
    return company;
}

function randomColor() {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

function createBox() {
    var box = document.createElement("div");
    box.style.width = "fit-content";
    box.style.height = "100px";
    box.style.backgroundColor = randomColor();
    box.style.position = "absolute";
    box.style.top = event.clientY + "px";
    box.style.left = event.clientX + "px";
    box.style.border = "1px solid black";
    box.style.textAlign = "center";
    box.style.paddingTop = "40px";
    box.style.fontSize = "20px";
    box.style.fontWeight = "bold";
    box.style.cursor = "pointer";
    box.innerHTML = randomCompany();
    return box;
}

function removeBox() {
    var box = document.getElementById("box");
    box.parentNode.removeChild(box);
}

function addBox() {
    var box = createBox();
    box.id = "box";
    document.body.appendChild(box);
}

function toggleBox() {

    if (document.getElementById("box")) {
        removeBox();
    } else {
        addBox();
    }
}

document.body.addEventListener("click", toggleBox);
