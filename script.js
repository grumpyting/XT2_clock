const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
/*Hierboven worden de seconden omgerekend naar juiste format en vervolgens in graden van een cirkel omgezet*/
}

setInterval(setDate, 1000);

setDate();

var current= new Date()
  var day_night=current.getHours()
  if (day_night<18){ 
    document.getElementById("welcome").innerHTML = "Good day!";
    document.querySelector('.inner-clock-face').style.backgroundImage= 'url("earth.png")';

  }else{
    document.getElementById("welcome").innerHTML = "Good evening!";
    document.querySelector('.inner-clock-face').style.backgroundImage = 'url("night.png")';
  }
/*wanneer het eerder is dan 18 uur dan laat hij de image zien "earth.png" zo niet is het avond en laat hij night.png zien.*/

var today = new Date()
document.getElementById('fullDate').innerHTML = today.getDate() + '/' + (today.getMonth()+1) +"/"+today.getFullYear();