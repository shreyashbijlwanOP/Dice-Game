




const doSomething =  document.getElementById("bossbtn");

doSomething.onclick = function fun()
{
  var randNumber = Math.floor(Math.random() * 6 ) +1;   // 1-6
  var randNumber2 =Math.floor(Math.random()*6) +1;

  var randomDiceImage = "dice" + randNumber + ".png";   // random dice image1-6.png
  var randomImageSource =  "./images/" + randomDiceImage ; // image/randomDiceImage
  var randomImageSource2 = "./images/dice" + randNumber2 + ".png";
  // Commmand to change the attribute of html's elemet;
  var image = document.querySelectorAll("img")[0];
  image.setAttribute("src",randomImageSource);
  document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

  if (randNumber>randNumber2)
  {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";

  }
  else if  (randNumber2>randNumber)
  {
    document.querySelector("h1").innerHTML = " Player 2 wins! 🚩";

  }

  else
  {
    document.querySelector("h1").innerHTML = " Ooops ! Its Draw ";
  }

}
