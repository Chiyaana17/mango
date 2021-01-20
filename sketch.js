
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boy = loadImage ("Plucking mangoes/boy.png")	
tree= loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1000, 700);
    

	engine = Engine.create();
	world = engine.world;

	
    ground1 = new ground(width/2,height-10,width,20)
	stone1 = new stone(125,486,16)
  mango1 = new mango(800,330,15)
  mango2 = new mango(700,330,15)
  mango3 = new mango(900,330,15)
  mango4= new mango(766,261,15)
  mango5 = new mango(650,270,15)
  mango6 = new mango(826,148,15)
  mango7 = new mango(715,181,15)
  mango8 = new mango(881,224,15)
  thread = Matter.Constraint.create({pointA:{x:125,y:486},
  bodyB:stone1.body,stiffness:0.9,length:40})
 Matter.World.add(world,thread)
 flag = 0
	Engine.run(engine);
  
}
function collision(a,b){
if(a.body.position.x-b.body.position.x<=a.radius+b.radius){
  Matter.Body.setStatic(a.body,false)
}
}
function keyPressed(){
  if (keyCode==32){
    thread.bodyB=stone1.body
    flag=0
  }
}
function draw() {
  rectMode(CENTER);
  background("#FFD700");
  image(boy,80,380,230,400 )
  push()
  imageMode(CENTER)
  image(tree,width-220,400,440,600)
  pop()
  ground1.display()
  stone1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  if(thread.bodyB){
line(thread.pointA.x,thread.pointA.y,stone1.body.position.x,stone1.body.position.y)}
 collision(mango1,stone1)
  collision(mango2,stone1)
  collision(mango3,stone1)
  collision(mango4,stone1)
  collision(mango5,stone1)
  collision(mango6,stone1)
 collision(mango7,stone1)
 collision(mango8,stone1)
}
function mouseDragged(){
  if (flag==0)
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})  
}
function mouseReleased(){
 thread.bodyB=null 
 flag=1
}

