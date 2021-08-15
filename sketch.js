
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restiution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(100,200,50, [ball_options])
	World.add(world.ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  display();

  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});	
	}
	
}



