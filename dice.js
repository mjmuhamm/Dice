

    var randomN1 = Math.round(Math.random()*5 +1);
    var randomDice1 = "dice" + randomN1 + ".png";

    var randomN2 = Math.round(Math.random()*5+1);
    var randomDice2 = "dice" + randomN2 + ".png";

      document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
      document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomN1 > randomN2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomN1 < randomN2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
