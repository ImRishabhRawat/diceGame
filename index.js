function imgVal1(num1) {
    var im1 = "images/dice" + num1 + ".png";
    return im1;
}

function imgVal2(num2) {
    var im2 = "images/dice" + num2 + ".png";
    return im2;
}
function pl(x1, x2) {
    document.querySelector(".dice .img1").setAttribute("src", x1);
    document.querySelector(".dice .img2").setAttribute("src", x2);

}

function diceValue() {

    var num1 = Math.floor(Math.random() * 6) + 1;
    var num2 = Math.floor(Math.random() * 6) + 1;

    var x1 = imgVal1(num1);
    var x2 = imgVal2(num2);

    pl(x1, x2);

    if (num1 > num2) {
        document.querySelector("h1").innerHTML = "🏅 Player 1 won";
    } else if (num1 < num2) {
        document.querySelector("h1").textContent = " Player 2 won 🏅";
    } else {
        document.querySelector("h1").textContent = "  Game 🤝 Tie."
    }
}

document.body.onload = diceValue();
