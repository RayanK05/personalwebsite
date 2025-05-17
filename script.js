var messageArray = ["Good Day, I'm Rayan"];
var speed = 100;
var textPosition = 0;

const typewriter = () => {
    document.querySelector("#line1").innerHTML =
        messageArray[0].substring(0, textPosition);

    if (textPosition++ !== messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
};

window.addEventListener("load", typewriter);
