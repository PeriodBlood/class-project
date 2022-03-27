var bg,bgImg;
var player1,player1Img;
function preload(){
bgImg=loadImage("images/bg.png")
player=loadAnimation("images/playerRunning.png","images/playerStanding.png","images/playerRunning2.png")
}

function setup() {
 createCanvas(700,300)
 
 player1=createSprite(50,230,10,10)
 player1.addAnimation("playerA",player)
 player1.scale=0.7
 ground=createSprite(350,300,700,10)
 ground.velocityX = -4
ground.visible=false

}

function draw() {
 background(bgImg)
if(ground.x<300){
    ground.x = ground.width/2
}
if(keyDown("space")){
    player1.velocityY=-10
}
player1.velocityY+=0.8
player1.collide(ground)
 drawSprites()
}