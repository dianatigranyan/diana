var weather = "winter"
var weatherh1 = document.getElementById("weather")
var socket = io();
var side = 12;
var m = 40.2;
var n = 40;
function setup() {
  frameRate(10);
  createCanvas(m * side, n * side);
  background('#acacac');
  
}
function drawmatrix(data) {
  let grassCount = document.getElementById('garssCount');
  grassCount.innerText = data.GrassStatics;
  let garssEaterCount = document.getElementById('garssEaterCount');
  garssEaterCount.innerText = data.Eatgrassstatics;
  let predatorCount = document.getElementById('predatorCount');
  predatorCount.innerText = data.predatorStatics;
  let eaterCount = document.getElementById('eaterCount');
  eaterCount.innerText = data.eaterStatics;
  let heroeCount = document.getElementById('heroeCount');
  heroeCount.innerText = data.heroestatics;
  matrix = data.matrix;



  console.log(data.matrix);
  console.log(data.GrassStatics);
  console.log(data.Eatgrassstatics);
  console.log(data.predatorStatics);
  console.log(data.eaterStatics);
  console.log(data.heroestatics);
  
  
  
  
  
  
  
  
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      //console.log(1)
      if (matrix[y][x] == 1) {
        if (weather == "winter") {
          fill("#D0F0C0")
          rect(y * side, x * side, side, side);
        }
        if (weather == "spring") {
          fill("lime");
          rect(y * side, x * side, side, side);
        }
        if (weather == "summer") {
          fill("#29AB87")
          rect(y * side, x * side, side, side);
        }
        if (weather == "autumn") {
          fill("#98FB98")
          rect(y * side, x * side, side, side);
        }
      }
      if (matrix[y][x] == 0) {
        if (weather == "winter") {
          fill("#FDE6FA1")
          rect(y * side, x * side, side, side);
        }
        if (weather == "spring") {
          fill("#FDB9C8");
          rect(y * side, x * side, side, side);
        }
        if (weather == "summer") {
          fill("#F987C5")
          rect(y * side, x * side, side, side);
        }
        if (weather == "autumn") {
          fill("#FCA3B7")
          rect(y * side, x * side, side, side);
        }
      }
      else if (matrix[y][x] == 2) {{
        fill("yellow");
        rect(y * side, x * side, side, side);
      }
      {
        if (weather == "winter") {
          rect(y * side, x * side, side, side);
          fill("#FFFDD0")
        }
        if (weather == "spring") {
          fill("#FCF4A3");
          rect(y * side, x * side, side, side);
        }
        if (weather == "summer") {
          fill("#FFF200")
          rect(y * side, x * side, side, side);
        }
        if (weather == "autumn") {
          fill("#E4CD05")
          rect(y * side, x * side, side, side);
        }
      }
    }
      else if (matrix[y][x] == 3) {{
        fill("red");
        rect(y * side, x * side, side, side);
      }
      {
        if (weather == "winter") {
          rect(y * side, x * side, side, side);
          fill("#FA8072")
        }
        if (weather == "spring") {
          fill("#ED2939");
          rect(y * side, x * side, side, side);
        }
        if (weather == "summer") {
          fill("#FF2400")
          rect(y * side, x * side, side, side);
        }
        if (weather == "autumn") {
          fill("#B22222")
          rect(y * side, x * side, side, side);
        }
      }
    }
      
      else if (matrix[y][x] == 4) {{
        fill("blue")
        rect(y * side, x * side, side, side);
      }
      {
        if (weather == "winter") {
          rect(y * side, x * side, side, side);
          fill("#95C8D8")
        }
        if (weather == "spring") {
          fill("#6693F5");
          rect(y * side, x * side, side, side);
        }
        if (weather == "summer") {
          fill("#0018F9")
          rect(y * side, x * side, side, side);
        }
        if (weather == "autumn") {
          fill("#598BAF")
          rect(y * side, x * side, side, side);
        }
      }
    }
      else if (matrix[y][x] == 5) {
        if (weather == "winter") {
          rect(y * side, x * side, side, side);
          fill("#E4A0F7")
        }
        if (weather == "spring") {
          fill("#7852A9");
          rect(y * side, x * side, side, side);
        }
        if (weather == "summer") {
          fill("#DE73FF")
          rect(y * side, x * side, side, side);
        }
        if (weather == "autumn") {
          fill("784B84")
          rect(y * side, x * side, side, side);
        }
      }
      rect(y * side, x * side, side, side);
    }
  }
}
socket.on("matrix", drawmatrix);
socket.on("weather", function (w) {
  weather = w;
  //console.log(weather);
  weather.innerHTML = weather
});



