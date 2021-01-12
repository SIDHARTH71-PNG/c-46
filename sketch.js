const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var forestImg;
var player1;
var ground;
var zombieImg,zombieGroup,

function  preload() {
    forestImg = loadImage("WallpaperDog-17001210.jpg");  
}
// {

// //zombieImg = loadImage("zombie_attack_animation_preview.gif");
// }

function setup()
{
createCanvas(1200,600); 
engine = Engine.create();
world = engine.world;
player1 = new Player(50, 200); 
ground = new Ground(600,height,1200,20);

}


function draw()
{
 background(forestImg);
 Engine.update(engine);
 player1.display();
 ground.display();
 spawnZombie();

 drawSprites();
}

function keyPressed()
{
    if(keyCode === 37)
    {
     player1.left();
    }
    if(keyCode === 39)
    {
    player1.right();
    }
    
}

function spawnZombie()
{
    if(frameCount % 60===0)
    {
        var zombie=createSprite(1200,575,50,50);
       // zombie.addImage(zombieImg);
        zombie.velocityX=-3;
        zombie.lifetime=400;
    }
}