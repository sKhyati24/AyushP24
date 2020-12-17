
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground;
var ball;
var rect1,rect2,rect3;
var paperObject;
var body;

function setup() {
	createCanvas(800, 500);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,480,800,20);

	rect1 = new Box(593,435,15,75);
	rect2 = new Box(708,435,15,75);
	rect3 = new Box(650,465,130,15);

	var ball_options ={
		'isStaic':false,
		'restitution':0.3,
		'friction':0.5,
		'density':1.2,
	  }
	  ball=Bodies.circle(200,100,40,ball_options);
      World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);
  
  keyPressed();

  drawSprites();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();

}

function keyPressed(){

 if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:85});
}
}


