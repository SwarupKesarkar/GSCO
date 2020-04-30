
var engine, world;
var car1, wall, inWall;
var speed, wieght, deformation, value;

function setup(){
    var canvas = createCanvas(1600,400);

    speed = random(50, 100);
    wieght = random(1500, 2200);

    car1 = createSprite(20, 200, 30, 20);
    car1.shapeColor = "white";
    
    wall = createSprite(1600, 200, 60, 200)
    wall.shapeColor = rgb(80, 80, 80)
    
    inWall = createSprite(wall.x - 25, 200, 60, 200);
    inWall.visible = false;
}

function draw(){
    background(0);

    car1.velocityX = speed;
    if (car1.isTouching(inWall))
    {
     car1.velocityX = 0;
     deformation = 0.5 * wieght * speed * speed;
     value = deformation / 22500;
     text("deformation: " + value, 750, 200);
     if (value => 180)
     {
      car1.shapeColor = "red"; 
     }
     if (value <= 180 && value > 100)
     {
      car1.shapeColor = "yellow"; 
     }
     if (value <= 100)
    {
     car1.shapeColor = "green"; 
    }
    }

    
    drawSprites();
   
}