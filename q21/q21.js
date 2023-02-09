

function init() {
    followMouse();
}

function createBox() {
    let box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "#FFFDD0";
    box.style.position = "absolute";
    box.style.left = "0px";
    box.style.top = "0px";
    box.style.margin = "10px";
    box.style.zIndex = "1000";
    box.style.display = "none";
    box.innerHTML = "EMU";
    return box;
}


function followMouse() {
    let box = createBox();
    document.body.appendChild(box);
    document.addEventListener("mousemove", function (event) {
        box.style.left = event.clientX + "px";
        box.style.top = event.clientY + "px";
    });

    document.addEventListener("mouseout", function (event) {
        box.style.display = "none";
    }
    );

    document.addEventListener("mouseover", function (event) {
        box.style.display = "block";
    }
    );

}


window.addEventListener("load", init);

