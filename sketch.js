//creates the global variables
var monkey, monkey_running;

var ground, invisibleGround;

var banana, bananaImage, obstacle, obstacleImage;

var FoodGroup, ObstacleGroup;

var Score;
var survivalTime = 0;

function preload(){
  //loads all the images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  //creates the canvas
  createCanvas(600,600);
  
  //creates the monkey spite
 monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //creates the ground
  ground = createSprite(400,350,900,10);
  ground.shapeColor = "brown";
  
  //creates the invisible ground
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  //creates the groups
  FoodGroup = new Group();
  ObstaclesGroup = new Group();
  
  //sets the default score
  score = 0;
}

function draw() {
  //sets the background color
 background("mediumSeaGreen");
  
  //makes the monkey collide from the invisible ground
  monkey.collide(invisibleGround);
  
  //resets the ground
  if(ground.x < 0){
   ground.velocityX = -5;
  ground.x = ground.width/2;
  }
    
  //jumping function for the monkey
  if(keyDown("space") && monkey.y > 200) {
      monkey.velocityY = -10;
    }
    monkey.velocityY = monkey.velocityY + 0.6;
  
  //calls the functions
  Food();
  Obstacles();
  
  //draws all sprites
  drawSprites();
  
  //creates the score
  stroke("white");
  textSize(20);
  fill("deepPink");
  text("Score: "+ score, 500,40);
  
  //creates the survival time
  stroke("white");
  textSize(20);
  fill("blue");
  survivalTime = Math.round(frameCount/frameRate());
  text("survivalTime: "+ survivalTime, 20,40);
}

function Food(){
  //creates and calls the banana after every 80 frames
  if (World.frameCount%80 === 0){
    banana = createSprite(600,200,20,20);
    banana.addAnimation("moving", bananaImage);
    banana.scale = 0.1;
    
     banana.y = Math.round(random(120,200));
    console.log(banana.y);
    
    banana.velocityX = -5;
    banana.setLifetime = 200;
    
    //adds banana to Food group
    FoodGroup.add(banana);
}
}

function Obstacles(){
  //creates and calls the obstacles after every 300 frames
  if (World.frameCount%300 === 0){
    obstacle = createSprite(600,310,20,20);
    obstacle.addAnimation("moving", obstacleImage);
    obstacle.scale = 0.2;
    
    obstacle.velocityX = -6;
    obstacle.setLifetime = 200;
    
    //adds obsatcle to Obstacles group
    ObstaclesGroup.add(obstacle);
}
}