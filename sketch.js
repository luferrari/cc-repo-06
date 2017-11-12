var data;
var fontR, fontM, fontB;
var flagUS, flagRU, flagIT, port1, port2, port3, port4, port5, port6, stars;
var hi1, hi2, hi3, hi4, hi5, hi6;
var hello = "press keys 1 to 6 to start";

function preload() {
  data = loadJSON('./assets/data/peopleinspace.json');

  fontR = loadFont('./assets/fonts/BarlowCondensed-Regular.ttf');
  fontM = loadFont('./assets/fonts/BarlowCondensed-Medium.ttf');
  fontB = loadFont('./assets/fonts/BarlowCondensed-Bold.ttf');

  flagUS = loadImage('./assets/images/flagUS.jpg');
  flagRU = loadImage('./assets/images/flagRU.jpg');
  flagIT = loadImage('./assets/images/flagIT.jpg');
  port1 = loadImage('./assets/images/port1.jpg');
  port2 = loadImage('./assets/images/port2.jpg');
  port3 = loadImage('./assets/images/port3.jpg');
  port4 = loadImage('./assets/images/port4.jpg');
  port5 = loadImage('./assets/images/port5.jpg');
  port6 = loadImage('./assets/images/port6.jpg');
  stars = loadImage('./assets/images/stars.png');

  hi1 = loadSound('./assets/sounds/hi1.mp3');
  hi2 = loadSound('./assets/sounds/hi2.mp3');
  hi3 = loadSound('./assets/sounds/hi3.mp3');
  hi4 = loadSound('./assets/sounds/hi4.mp3');
  hi5 = loadSound('./assets/sounds/hi5.mp3');
  hi6 = loadSound('./assets/sounds/hi6.mp3');

}

function setup() {
  createCanvas(500, 500);
  background(51);
  image(stars, (width - 750) / 3, (height - 750) / 3, 750, 750);
  noStroke();
  textFont(fontR);
  textAlign(CENTER);
  fill(255, 159);
  textSize(25);
  text(hello, width / 2, height / 2 + 5);
}

function keyPressed(event) {
  var col = [
    color(51, 51, 51),
    color(94, 102, 157),
    color(159, 113, 134),
    color(140, 170, 158),
    color(149, 184, 209),
    color(233, 224, 191),
    color(237, 175, 184)
  ];
  var astro = data.people;
  var greet = [hi1, hi2, hi3, hi4, hi5, hi6];
  var flag = [flagUS, flagRU, flagIT];
  var port = [port1, port2, port3, port4, port5, port6];

  textAlign(LEFT);

  for (var i = 0; i <= astro.length; i++) {
    var j = i - 1;

    if (event.keyCode == 48 + i) {
      var days = (Date.now() - Date.parse(astro[j].launchdate)) / 86400000;

      image(stars, (width - 750) / 3, (height - 750) / 3, 750, 750);

      greet[j].play(0, 1, 0.5, 0, 1);

      if (i == 3) {
        image(flag[2], 27, 86, 30, 16);
      } else if (i == 2 || 6) {
        image(flag[1], 27, 86, 30, 16);
      } else {
        image(flag[0], 27, 86, 30, 16);
      }

      textFont(fontB, 60);
      fill(col[i]);
      text(astro[j].name, 25, 10, 450, 70);

      textFont(fontM, 20);
      text(astro[j].title, 65, 82, 110, 25);

      textFont(fontR, 25);
      fill(255);
      text(astro[j].bio, 25, 110, 450, 125);

      fill(col[i]);
      rect(25, 258, floor(days) * 2, 45);
      textFont(fontM, 40);
      fill(255);
      ellipse(25, 255, 5);
      for (d = 45; d < 25 + floor(days) * 2; d += 20) {
        triangle(d - 3, 253, d + 3, 253, d, 258);
      }
      text(floor(days), 30, 255, floor(days) * 2, 50);
      textSize(20);
      text("days on the " + astro[j].location + " so far", 25, 305, 450, 50);

      image(port[j], 25, 350, 125, 125);

      textFont(fontR, 18);
      text("Wikipedia:", 160, 362);
      textSize(14);
      fill(col[i]);
      text(astro[j].biolink, 240, 362);

      if (astro[j].twitter) {
        textSize(18);
        fill(255);
        text("Twitter:", 160, 385);
        textSize(14);
        fill(col[i]);
        text(astro[j].twitter, 240, 385);
      }
    }
  }
}

// PALETTE
// jet              rgb(51,51,51)
// dark blue-gray   rgb(94,102,157)
// mountbatten pink rgb(159,113,134)
// pewter blue      rgb(140,170,158)
// dark sky blue    rgb(149,184,209)
// nadeshiko pink   rgb(233,224,191)
// pearl            rgb(237,175,184)