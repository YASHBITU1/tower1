const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingShot;

function preload() {
  
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(390,300,200,10);
    ground1 = new Ground(750,180,200,10);
    
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    block16 = new Block(390,155,30,40);

    block17 = new Block(750,170,30,40);
    block18 = new Block(721,170,30,40);
    block19 = new Block(691,170,30,40);
    block20 = new Block(780,170,30,40);
    block21 = new Block(810,170,30,40);

    block22 = new Block(721,140,30,40);
    block23 = new Block(750,140,30,40);
    block24 = new Block(780,140,30,40);

    block25 = new Block(750,110,30,40);


   polygon1 = new Polygon(100,300);


    
    //log6 = new Log(230,180,80, PI/2);
    slingshot1 = new SlingShot(polygon1.body,{x:190, y:100});
}

function draw(){
    background(255,0,0);
    text(mouseX+","+mouseY,30,45);
    Engine.update(engine);
    strokeWeight(4);
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   block23.display();
   block24.display();
   block25.display();

   polygon1.display();
 
   ground.display();
   ground1.display();
   slingshot1.display();
    
}  

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}