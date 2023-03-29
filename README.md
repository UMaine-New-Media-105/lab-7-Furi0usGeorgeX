[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/oPXDwk0m)

In lab 7 we used arrays to generate a diagonal line consisting of random shapes.
First, I set up the array, made up of 5 different premade shape functions. I then set the amount of shapes in a row to 10, and offset it by the width of the canvas.
   shape = ["crate", "donut", "pyramid", "oval", "trapezoid"];
   shapesPerRow = 10;
   let offset = width / shapesPerRow;
   
   Inside draw, I used this function to get the diagonal line that I wanted.
    for (let counter = 0; counter < shapesPerRow; counter++) {
    let randomShape = random(shape);
    chooseShape(randomShape, shapeX * counter, shapeY * counter);
  }
  
  I don't know what value "counter" is supposed to be, but it just works I guess. But essentially, it draws a random shape, multiplying its X and Y values by "counter" in order to offset each shape from the last.
  
  In order for the "chooseShape" function to work, this very long "if/else" setup was made
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

Everything after this is the functions that define the shapes used in the array.
