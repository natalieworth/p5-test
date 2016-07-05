function setup() {
  createCanvas(900, 720);
}

function draw() {
  if(mouseIsPressed==true){
  ellipse(mouseX, mouseY, 50, 30);
  fill(random(255, 255, 0), random(0, 255, 0), random(150, 255, 0));
  }
}