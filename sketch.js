const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
//json= java script object notation
    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution: 1,
        friction: 0.2
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball=Bodies.circle(200,200,20,ball_options)
    World.add(world,ball)
    console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green")
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,20,20)
}