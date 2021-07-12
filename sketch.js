var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf
var appleImg,leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  leafImg=loadImage("leaf.png")
  app
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
apple=createSprite()
apple.addImage(appleImg)

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
leaf=createSprite()
leaf.addImage(leafImg)
}


function draw() {
  background(0);
 
  rabbit=World.MouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}