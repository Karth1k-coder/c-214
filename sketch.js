var fixedRect, movingRect, Rect1, Rect2
function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400, 210, 50, 50);
  Rect1=createSprite(50,350,100,100)
  Rect2=createSprite(750,350,100,100)
  Rect3=createSprite(100,100,100,100)
  Rect4=createSprite(400,100,100,100)
  Rect5=createSprite(600,50,100,100)
  Rect6=createSprite(600,350,100,100)
  Rect5.velocityY=2;
  Rect6.velocityY=-2;
  Rect1.velocityX=2;
  //Rect1.velocityY=2;
  Rect2.velocityX=-2;
  //Rect2.velocityY=-2;
  Rect1.shapeColor="cyan"
  Rect2.shapeColor="yellow"
  Rect3.shapeColor="blue"
  Rect4.shapeColor="purple"
  Rect5.shapeColor="pink"
  Rect6.shapeColor="white"
}

function draw() {
  background(0); 
movingRect.x= World.mouseX 
movingRect.y= World.mouseY


if(isTouching(Rect3,movingRect)){
  Rect3.shapeColor="lime"
    movingRect.shapeColor="lime"
  
}
else{
  Rect3.shapeColor="red"
  movingRect.shapeColor="red"

}
bounceOff(Rect5,Rect6)
bounceOff(Rect1,Rect2)





  drawSprites();
}
