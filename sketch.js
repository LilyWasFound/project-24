const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var bin1, bin2, bin3;
var ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,640,50);
	bin1 = new Bin(750,635,15,100);
	bin2 = new Bin(550,635,15,100);
	bin3 = new Bin(650,685,200,15);
	ground = new Ground(400,695,800,10);
}

function draw() {
  background(0);
  Engine.update(engine);
  
 drawSprites();
 paper.display();
 ground.display();
 bin1.display();
 bin2.display();
 bin3.display();
}

function keyPressed(){ 
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400}); 
	} 
}

