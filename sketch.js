
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof();
	bob1=new bobs(300,300);
	bob2=new bobs(350,300);
	bob3=new bobs(400,300);
	bob4=new bobs(450,300);
	bob5=new bobs(500,300);

	rope1=new Rope(bob1.body,roof.body,-100);
	rope2 = new Rope(bob2.body,roof.body,-50);
	rope3=new Rope(bob3.body,roof.body,0);
	rope4 = new Rope(bob4.body,roof.body,50);
	rope5=new Rope(bob5.body,roof.body,100);
    
	Engine.run(engine);
  
}


function draw() {
  background(0);
	rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display(); 
  bob2.display(); 
  bob3.display(); 
  bob4.display(); 
  bob5.display(); 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.position,{x:50,y:-70});
	}
}


