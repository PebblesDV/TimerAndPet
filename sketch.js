let canvasWidth = 800;
let canvasHeight = 600;
let arrX = 15;
let arrY = 17;
let XPos = 50;
let YPos = 115;
let size = 10;

let startButton;
let colorWhite = (255, 255, 255);
let colorBlack = (0, 0, 0);

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  startButton = new Button("Start", 450, 200, 150, 50);
  startButton.onClick = startButtonPressed;

  noLoop();
}

function startButtonPressed() {
  console.log("button was pressed");
}

function draw() {
  background(225, 225, 225);
  
  fill(colorWhite);
  rect(XPos, YPos, 300, 340); //background for pet

  line(400, 0, 400, 600); //seperates two halves of the screen

  startButton.display();
  

  // sadArt();
  // neutralArt();
  // happyArt();
  timerOnArt();
}

//sad, neutral, happy and concentrated emotions for pet
//show certain emotions on certain moments (use timers?)
//make buttons (using oop??) not in the simple way i used before
