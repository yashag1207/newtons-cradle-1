
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;


function preload()
{
	
}

function setup() {
	createCanvas(600, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(172,250,40);
bob2=new Bob(211,250,40);
bob3=new Bob(250,250,40);
bob4=new Bob(289,250,40);
bob5=new Bob(328,250,40);
roof=new Roof(250,50,200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  
  drawSprites();

}



