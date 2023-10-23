let canvasWidth = 800;
let canvasHeight = 600;
//width and length of drawing pixels (15 pixels wide, 17 pixels high)
let arrX = 15;
let arrY = 17;
//starting X and Y for drawings
let XPos = 50;
let YPos = 115;
//pixel size
let size = 20;

const buttons = [];

//colors for drawings
let colorWhite = (255, 255, 255);
let colorBlack = (0, 0, 0);

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  noLoop();

  buttons[0] = createButton("+5 sec"); //button to add 5 seconds to timer
  buttons[0].position(460, 380);
  buttons[0].style("background-color", "white");
  buttons[0].style("font-size", "40px");
  buttons[0].mousePressed();

  buttons[1] = createButton("+10 sec"); //button to add 10 seconds to timer
  buttons[1].position(600, 380);
  buttons[1].style("background-color", "white");
  buttons[1].style("font-size", "40px");
  buttons[1].mousePressed();

  buttons[2] = createButton("0 min"); //button to set timer to 0 minutes
  buttons[2].position(480, 440);
  buttons[2].style("background-color", "white");
  buttons[2].style("font-size", "40px");
  buttons[2].mousePressed();

  buttons[3] = createButton("25 min"); //button to set timer to 25 minutes
  buttons[3].position(600, 440);
  buttons[3].style("background-color", "white");
  buttons[3].style("font-size", "40px");
  buttons[3].mousePressed();

  buttons[4] = createButton("Pause"); //button to pause timer
  buttons[4].position(600, 280);
  buttons[4].style("background-color", "white");
  buttons[4].style("font-size", "40px");
  buttons[4].mousePressed();

  buttons[5] = createButton("Start"); //button to start timer
  buttons[5].position(495, 280);
  buttons[5].style("background-color", "white");
  buttons[5].style("font-size", "40px");
  buttons[5].mousePressed();
}

function draw() {
  background("pink");

  line(400, 0, 400, 600); //seperates two halves of the screen

  fill(colorWhite);
  rect(XPos, YPos, 300, 340); //background for pet
  rect(458, 165, 300, 100); //background for timer
  rect(150, 470, 100, 70); //background for pet toy

  // sadArt();
  // neutralArt();
  // happyArt();
  timerOnArt();
}

//sad, neutral, happy and concentrated emotions for pet
//show certain emotions on certain moments (use timers?)
//make buttons
