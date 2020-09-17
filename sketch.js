//  This was developed from Dan Shiffman's Coding Train
//  See 2.2: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

let boxX = 300;
let speed = 10;

function setup() {
  createCanvas(600, 600);
}

function draw() {

  background(boxX,200,240);
 noStroke();
 fill(0,0,0);
 rect(220+boxX,152,160,120);
 circle(302+boxX, 145, 12);
 rect(294+boxX,230,16,60);
 rect(275+boxX,290,54,22);
 rect(290+boxX,312,24,52);
 triangle(302+boxX, 327, 276+boxX, 392, 328+boxX, 392);
 rect(276+boxX,392,52,26);
 triangle(276+boxX, 418, 302+boxX, 453, 328+boxX, 418);
 triangle(267+boxX, 478, 302+boxX, 428, 337+boxX, 478);
 rect(264+boxX,478,76,13);


 fill(+boxX,200,240);
 triangle(220+boxX, 150, 220+boxX, 270, 230+boxX, 150);
 triangle(380+boxX, 150, 380+boxX, 270, 370+boxX, 150);
 rect(286+boxX,149,20,2);
 circle(275+boxX, 312, 30);
 circle(329+boxX, 312, 30);

  if (boxX > width || boxX < 0 ) {
    speed = speed*-1
  }
  boxX = boxX + speed;

//  If boxX reaches the edge of the canvas, move left
//  If boxX reaches the edge of the canvas, boxX-1
//  If boxX is great than canvas width, boxX-1
//  If boxX > width, boxX-1

//  What happens when the box reaches the left edge?
}
