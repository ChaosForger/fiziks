const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground
var ball

var engine,world;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create()
  world = engine.world

  var ground_options={
    isStatic : true
  }

ground = Bodies.rectangle(200,390,200,10, ground_options)
World.add(world,ground)
console.log(ground)

var ball_options = {
  restitution: 1.0
}

ball = Bodies.circle(200,100,20, ball_options)
World.add(world,ball)

}

function draw() {
  background(0,0,0);  
 Engine.update(engine) 
 rectMode(CENTER)

 rect(ground.position.x, ground.position.y,400,20)

 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 20,20)
}