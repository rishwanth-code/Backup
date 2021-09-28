const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var ball2;
var rArrow;
var uArrow;
var car,car2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  // right = new Ground(390,200,20,400);
  // left = new Ground(10,200,20,400);
  // top_wall = new Ground(200,10,400,20);
  var bOptions={
    restitution : 0.9,
  }
  ball = Bodies.circle(200,200,20,bOptions);
  World.add(world,ball);

  ball2 = Bodies.circle(200,200,20,bOptions);
  World.add(world,ball2);
  // rArrow = createImg('right.png');
  // rArrow.position(220,30);
  // rArrow.size(50,50);
  // rArrow.mouseClicked(hForce);
 
  // uArrow= createImg('up.png');
  // uArrow.position(100,30);
  // uArrow.size(50,50);
  // uArrow.mouseClicked(vForce);
   car = Matter.Constraint.create({
    pointA : {x : 200, y : 30},
    bodyB : ball,
    pointB : {x:0,y:0},
    lenght : 60,
    stiffness : 0.1 
  })
  car2 = Matter.Constraint.create({
    bodyA : ball,
    pointA : {x : 0, y : 0},
    bodyB : ball2,
    pointB : {x:0,y:0},
    lenght : 60,
    stiffness : 0.1 
  })



  
  World.add(world,car);
  World.add(world,car2);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  // top_wall.show();
  // left.show();
  // right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,20)
  push();
  strokeWeight(3);
  stroke(255);
  line(car.pointA.x,car.pointA.y,ball.position.x, ball.position.x)
  pop();
}
function keyPressed() {
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}
// function vForce(){
//   Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
// }
// function hForce(){
//   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
// }
