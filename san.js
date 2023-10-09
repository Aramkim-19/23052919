// 산호초 그룹 1
var im = ["san/s3", "san/s4", "san/s5", "san/s6", "san/s7", "san/s8"];
var container = document.getElementById("image-container");

for (var i = 0; i < 65; i++) {
  var c = document.createElement("img");
  c.src = im[randomBH(0, 5)] + ".png";
  c.style.width = randomBH(20, 50) + "px";
  c.style.height = "auto";
  c.className = "pp";
  c.style.left = Math.random() * screen.availWidth + "px";
  c.style.top = Math.random() * screen.availHeight + "px";
  c.style.opacity = randomBH(10, 60) / 100; // 랜덤한 opacity 설정
  c.style.top = randomBH(280,360) + "px";
  c.style.left = randomBH(50,750) + "px";


  document.body.appendChild(c);
}

function randomBH(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 산호초 그룹 2
var im = ["san/s3", "san/s4", "san/s5", "san/s6", "san/s7", "san/s8"];
var container = document.getElementById("image-container2");

for (var i = 0; i < 80; i++) {
  var e = document.createElement("img");
  e.src = im[randomBH(0, 5)] + ".png";
  e.style.width = randomBH(10, 45) + "px";
  e.style.height = "auto";
  e.className = "pp";
  e.style.left = Math.random() * screen.availWidth + "px";
  e.style.top = Math.random() * screen.availHeight + "px";
  e.style.opacity = randomBH(10, 50) / 100; // 랜덤한 opacity 설정
  e.style.top = randomBH(140,190) + "px";
  e.style.left = randomBH(1050,1900) + "px";


  document.body.appendChild(e);
}

function randomBH(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// 산호초 그룹 3

var im = ["san/s3", "san/s4", "san/s5", "san/s6", "san/s7", "san/s8"];
var container = document.getElementById("image-container3");

for (var i = 0; i < 35; i++) {
  var f = document.createElement("img");
  f.src = im[randomBH(0, 5)] + ".png";
  f.style.width = randomBH(50, 100) + "px";
  f.style.height = "auto";
  f.className = "pp";
  f.style.left = Math.random() * screen.availWidth + "px";
  f.style.top = Math.random() * screen.availHeight + "px";
  f.style.opacity = randomBH(20, 70) / 100; // 랜덤한 opacity 설정
  f.style.top = randomBH(450,550) + "px";
  f.style.left = randomBH(800,1550) + "px";


  document.body.appendChild(f);
}

function randomBH(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 산호초 그룹 4

var im = ["san/s3", "san/s4", "san/s5", "san/s6", "san/s7", "san/s8"];
var container = document.getElementById("image-container3");

for (var i = 0; i < 15; i++) {
  var g = document.createElement("img");
  g.src = im[randomBH(0, 5)] + ".png";
  g.style.width = randomBH(90, 170) + "px";
  g.style.height = "auto";
  g.className = "pp";
  g.style.left = Math.random() * screen.availWidth + "px";
  g.style.top = Math.random() * screen.availHeight + "px";
  g.style.opacity = randomBH(40, 80) / 100; // 랜덤한 opacity 설정
  g.style.top = randomBH(700,900) + "px";
  g.style.left = randomBH(100,900) + "px";


  document.body.appendChild(g);
}

function randomBH(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 산호초 그룹 5

var im = ["san/s3", "san/s4", "san/s5", "san/s6", "san/s7", "san/s8"];
var container = document.getElementById("image-container3");

for (var i = 0; i < 40; i++) {
  var h = document.createElement("img");
  h.src = im[randomBH(0, 5)] + ".png";
  h.style.width = randomBH(10, 25) + "px";
  h.style.height = "auto";
  h.className = "pp";
  h.style.left = Math.random() * screen.availWidth + "px";
  h.style.top = Math.random() * screen.availHeight + "px";
  h.style.opacity = randomBH(10, 30) / 100; // 랜덤한 opacity 설정
  h.style.top = randomBH(0,30) + "px";
  h.style.left = randomBH(400,1050) + "px";

  


  document.body.appendChild(h);
}

function randomBH(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}