let shapeX = 40;
let shapeY = 40;

function setup() {
  createCanvas(400, 400);
  noLoop();
  shape = ["crate", "donut", "pyramid", "oval", "trapezoid"];
  shapesPerRow = 10;
  let offset = width / shapesPerRow;
}

function draw() {
  background("pink");

  for (let counter = 0; counter < shapesPerRow; counter++) {
    let randomShape = random(shape);
    chooseShape(randomShape, shapeX * counter, shapeY * counter);
  }
}

function chooseShape(shapeName, shapeX, shapeY) {
  if (shapeName == "crate") {
    crate(shapeX, shapeY);
  } else if (shapeName === "donut") {
    donut(shapeX, shapeY);
  } else if (shapeName == "pyramid") {
    pyramid(shapeX, shapeY);
  } else if (shapeName == "oval") {
    oval(shapeX, shapeY);
  } else if (shapeName == "trapezoid") {
    trapezoid(shapeX, shapeY);
  }
}

function crate(x, y) {
  push();
  translate(x, y);
  fill("saddlebrown");
  rect(0, 0, 40);
  pop();
}

function donut(x, y) {
  push();
  translate(x, y);
  fill("cyan");
  ellipse(20, 20, 40);
  fill("pink");
  ellipse(20, 20, 10);
  pop();
}

function pyramid(x, y) {
  push();
  translate(x, y);
  fill("wheat");
  beginShape();
  vertex(0, 40);
  vertex(20, 0);
  vertex(40, 40);
  endShape(CLOSE);
  pop();
}

function oval(x, y) {
  push();
  translate(x, y);
  fill("silver");
  ellipse(20, 20, 20, 40);
  pop();
}

function trapezoid(x, y) {
  push();
  translate(x, y);
  fill("navy");
  beginShape();
  vertex(0, 40);
  vertex(10, 0);
  vertex(30, 0);
  vertex(40, 40);
  endShape(CLOSE);
  pop();
}
