var randomnum1 = Math.floor(Math.random()*6) + 1;

var diceimg1 = "images/dice" + randomnum1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", diceimg1);

var randomnum2 = Math.floor(Math.random()*6) + 1;

var diceimg2 = "images/dice" + randomnum2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", diceimg2);

if (diceimg1 == diceimg2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (diceimg1 > diceimg2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}

else{
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins";
}


