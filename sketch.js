const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //
    box1 = new Box(170,300,50,50);
    box2 = new Box(200,100,50,50);
    ground = new ground(200,350,400,70);
    
}

function draw(){
    background(0);
    Engine.update(engine);
      //  rect(ground.position.x,ground.position.y,400,20);
    box2.display();
    ground.display();
    box1.display();
}