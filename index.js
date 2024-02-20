
const audio = new Audio("tic-tac-27828.mp3")
 setInterval(
    function (){
        let  d = new Date();
        console.log("date....",d);
second = d.getSeconds();
console.log("second",second);

minute = d.getMinutes();
console.log("minutes..........",second);

hour = d.getHours();
console.log("hours",second)

 let hourRotaion = 30*hour + minute/2;
console.log("rotaion1....hour",hourRotaion);

 let minuteRotation = 6*minute
console.log("rotaion2....minute",minuteRotation);

  let secondRotaion = 6*second
 console.log("rotaion3....second",secondRotaion);


document.getElementById("second").style.transform  =  "rotate(" + secondRotaion + "deg )";

document.getElementById("minute").style.transform  =  "rotate(" + minuteRotation + "deg )";
document.getElementById("hour").style.transform  = "rotate(" + hourRotaion + "deg )";
audio.play();
    }
 )

    