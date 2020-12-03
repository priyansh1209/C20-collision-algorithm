var movingRect,fixedRect

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 100, 60);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,200,70,100)
  movingRect.shapeColor = "blue";
}

function draw() {
  background(25,35,45);  
 
  movingRect.x = mouseX
  movingRect.y = mouseY

  if(movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x <= fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y <=  fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "purple";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }
 
  drawSprites();
}