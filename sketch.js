var paper;
var ground;
var side1;
var side2;
var side3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(10,200,20);
    side1 = new Dustbin(510,610,20,100);
	side2 = new Dustbin(620,650,200,20);
	side3 = new Dustbin(730,610,20,100);

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);


paper.display();
side1.display();
side2.display();
side3.display();



  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	 }
   }


