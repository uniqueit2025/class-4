let currentBox = 0;

let flag = 1

function turnLights(params) {
    const boxes = document.querySelectorAll(".box")

    boxes.forEach(box => box.style.backgroundColor = "black")

    if (flag % 2 != 0) {
        boxes[currentBox].style.backgroundColor = "blue"
        currentBox = (currentBox + 1) % boxes.length
    }

    flag = flag + 1

    setTimeout(turnLights, 1000)
}