var cat , catImg, catImg2,catImg4;
var mouse, mpuseImg,mouseImg4;
var garden,gardenImg;
var mouseTeasingImg;
function preload() {
    //load the images here
 catImg = loadImage("images/cat1.png");
 mouseImg = loadAnimation("images/mouse1.png");
 gardenImg = loadImage("images/garden.png");
mouseTeasingImg = loadAnimation("images/mouse2.png","images/mouse3.png")
catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
catImg4 = loadAnimation("images/cat4.png")
mouseImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
  background (0);
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(900,600,50,100);
 cat.addImage(catImg);
 cat.scale = 0.1;

 mouse = createSprite(50,600,50,100);
 mouse.addAnimation("oooo",mouseImg);
 mouse.scale = 0.07;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
  if(mouse.x-cat.x < mouse.width/2+cat.width/2 &&
    cat.x - mouse.x < mouse.width/2+cat.width/2){
      cat.velocityX = 0;
      cat.addAnimation("stop",catImg4);
      cat.changeAnimation("stop",catImg4);
      mouse.addAnimation("check",mouseImg4);
      mouse.changeAnimation("check",mouseImg4);

    }
     mouse.setCollider("circle",0,0,40);
     mouse.debug = true;
     cat.setCollider("circle",0,0,40);
     cat.debug = true;

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
  console.log("working");
   mouse.x = mouse.x + 5;
   mouse.addAnimation("teasing",mouseTeasingImg);
   mouse.changeAnimation("teasing",mouseTeasingImg);
   }  
 if(keyCode===LEFT_ARROW){
   cat.velocityX = -5;
   cat.addAnimation("moving",catImg2);
   cat.changeAnimation("moving",catImg2);
   }

 }
