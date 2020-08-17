var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var division = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var turn=0
gameState="start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   if(particle!=null){
    particle.display();
    if(particle.body.position.y > 760){
     if(particle.body.position.x < 330){
       score = score+500;
       particle=null;
       if(turn>=5){
         gameState = "end";
       }
     }
   }
 }

 if(particle!=null){
  particle.display();
  if(particle.body.position.y > 760){
   if(particle.body.position.x < 565 && particle.body.position.x > 330){
     score = score+100;
     particle=null;
     if(turn>=5){
       gameState = "end";
     }
   }
 }
}
if(particle!=null){
particle.display();
if(particle.body.position.y > 760){
 if(particle.body.position.x < 805 && particle.body.position.x > 565){
   score = score+200;
   particle=null;
   if(turn>=5) gameState = "end";
 }
}
}


   text("Score : "+score,30,40);

   textSize(25);
   text("500",25,550);
   text("500",105,550);
   text("500",185,550);
   text("500",265,550);
   text("100",345,550);
   text("100",425,550);
   text("100",505,550);
   text("200",585,550);
   text("200",665,550);
   text("200",745,550);

   if(gameState==="end"){
    textSize(80);
    text("GAME OVER",200,250);
   }
  }

  function mousePressed(){
    if(gameState !== "end"){
      turn++;
      particle = new Particle(mouseX, 10, 10, 10);
    }
  }