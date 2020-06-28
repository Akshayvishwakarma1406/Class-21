var fixedRect, movingRect;
var obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj3 = createSprite(200, 100, 50, 80);
  obj3.shapeColor = "green";
  obj3.debug = true;
  obj4 = createSprite(700, 100,80,30);
  obj4.shapeColor = "green";
  obj4.debug = true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj3.velocityX = +5;
  obj4.velocityX = -5;
}

function draw() {
  background(0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(obj3,obj4);
  drawSprites();
}

