
let masterSize = 12;
//   Colombia
let alegre = {
  x: 180,
  y: 210,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold: 100
};
 let maraca1 = {
   x: 180,
   y: 235,
  sizeX: masterSize,
   sizeY: masterSize,
   threshold: 100
 };
 let maraca2 = {
   x: 205,
   y: 205,
   sizeX: masterSize,
   sizeY: masterSize,
  threshold: 100
 };

 let tambora = {
   x: 205,
   y: 230,
   sizeX: masterSize,
   sizeY: masterSize,
   threshold: 100
 };
 let llamador = {
   x: 180,
   y: 260,
   sizeX: masterSize,
   sizeY: masterSize,
   threshold: 100
 };

 //Brasil
 let agogo = {
  x: 400,
  y: 275,
 sizeX: masterSize,
  sizeY: masterSize,
   threshold: 100
};

 let surdo2 = {
  x: 365,
   y:320,
   sizeX: masterSize,
   sizeY: masterSize,
   threshold: 100
 };
 let surdo1 = {
   x: 355,
   y: 290,
   sizeX: masterSize,
   sizeY: masterSize,
   threshold: 100
};
 let tamborim = {
   x: 380,
   y: 295,
  sizeX: masterSize,
  sizeY: masterSize,
   threshold: 100
 };
let chocallo = {
  x:375,
  y:265,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold:100
};
let caixa= {
  x: 337,
  y: 315,
 sizeX: masterSize,
 sizeY: masterSize,
  threshold: 100
};
// URUGUAY

let piano = {
  x:265,
  y:442,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold:100
};

let chico1 = {
  x:245,
  y:465,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold:100
};
let chico2 = {
  x:240,
  y:440,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold:100
};
let clave = {
  x:220,
  y:465,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold:100
};
let repique = {
  x:227,
  y:487,
  sizeX: masterSize,
  sizeY: masterSize,
  threshold:100
};

let instruments = [
  alegre,
  maraca1,
  maraca2,
  tambora,
  llamador,
  agogo,
  surdo1,
  surdo2,
  tamborim,
  chocallo,
  caixa,
  piano,
  chico1,
  chico2,
  clave,
  repique
];

let soundsPaths = [
  'agogo',
  'alegre',
  'caixa',
  'chico1',
  'chico2',
  'chocallo',
  'clave',
  'llamador',
  'maraca1',
  'maraca2',
  'piano',
  'repique',
  'surdo1',
  'surdo2',
  'tambora',
  'tamborim'
];

//array of sounds
let sounds = [];

//path auxiliary variables
let prePath = 'https://raw.githubusercontent.com/MarcoITP18/granular-latin-america-map/gh-pages/assets/';
let postPath = '.wav';

let distanceThreshold = 10;

function preload() {

  //load all the files
  for (var i = 0 ; i < soundsPaths.length; i++) {
      sounds.push(loadSound(prePath + soundsPaths[i] + postPath));
  }

}

 function setup() {

  console.log("canvas created");
  //createCanvas (480,800);
  createCanvas (windowWidth, windowHeight);

  //make them all be muted and looping
  for (var i = 0 ; i < soundsPaths.length; i++) {
    sounds[i].loop();
    sounds[i].setVolume(0.0);
  }
}

function draw() {

  background(2, 122, 222);
  fill(3, 222, 00);
  noStroke();

  drawTriangles();

  fill(222, 33, 22);

  drawEllipses();

}

function mousePressed() {

    for (var i = 0; i < instruments.length; i++) {
      if (int(dist(mouseX, mouseY, instruments[i].x, instruments[i].y)) < distanceThreshold) {
        if (sounds[i].getVolume() == 0.0) {
          sounds[i].setVolume(1.0);
        } else {
          sounds[i].setVolume(0.0);
        }
    }
  }
}


function drawTriangles() {
  triangle(170, 175, 420, 270, 170, 575); //continent
  triangle(150, 180, 190, 170, 160, 140); //panama
  triangle(120, 150, 200, 135, 140, 80); //costa rica
  triangle(200, 70, 110, 5, 80, 90); //mexico
  triangle(230, 40, 265, 20, 400, 75); //cuba
  triangle(250, 75, 260, 65, 340, 80); //jamaica
  triangle(400, 35, 410, 20, 380, 20); //PR
  triangle(380, 100, 380, 130, 490, 170); //DR/Haiti
}

function drawEllipses() {

  for (let i = 0; i < instruments.length; i++) {
    if (sounds[i].getVolume() == 0.0) {
      fill(255, 0, 0);
    } else {
      fill(255, 255, 0);
    }
    ellipse(instruments[i].x, instruments[i].y, instruments[i].sizeX, instruments[i].sizeY);
  }

}
