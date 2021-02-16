const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var options = {
    restitution: 1,density: 20
  }
  ball = Bodies.rectangle(100,200,50,50,options);
  
  World.add(myWorld,ball);
  ball1 = Bodies.circle(300,200,25,options);
  
  World.add(myWorld,ball1);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  
  World.add(myWorld,ground);
  console.log(ball);
  console.log(ball.position.x);
  Engine.run(myEngine);
}

function draw() {
  background("black"); 
  rectMode(CENTER);
  rect (200,200,50,50);
  rect (ball.position.x,ball.position.y,50,50);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse (ball1.position.x,ball1.position.y,25)
  drawSprites();
}