//create random number
var randomNumber1 = Math.floor(Math.random()*6)+1;
//selecting random image
var randomImage1 = "dice"+randomNumber1+".png";
//create source link
var randomImageSource1 = "images/"+randomImage1;
//select the image
var image1 = document.querySelectorAll("img")[0];
//set random image to that point
image1.setAttribute("src",randomImageSource1);



//create random number
var randomNumber2 = Math.floor(Math.random()*6)+1;
//selecting random image
var randomImage2 = "dice"+randomNumber2+".png";
//create source link
var randomImageSource2 = "images/"+randomImage2;
//select the image
var image2 = document.querySelectorAll("img")[1];
//set random image to that point
image2.setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins! 🚩";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
