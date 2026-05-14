let img;

function preload() {
  img = loadImage("assets/images/nosmoking.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(227, 209, 52);
  image(img, 50, 150);

  textSize(40);
  stroke(10);
  text("出口", 50, 70);

  textSize(30);
  stroke(3);
  text("Exit", 50, 100);

  textSize(80);
  stroke(20);
  text("8", 150, 100);

  fill(0);
  triangle(280, 60, 320, 60, 300, 40);

  rect(290, 60, 20, 40);
}
