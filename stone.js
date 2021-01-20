class stone{
    constructor(x,y,r){
    this.img = loadImage("Plucking mangoes/stone.png")
    this.radius=r
    var properties={
        restitution:0.7,
        friction:0.2,
        density:3
    }
    this.body=Matter.Bodies.circle(x,y,this.radius,properties)
    Matter.World.add(world,this.body)
}
display(){
    push()
    ellipseMode(RADIUS)
    ellipse (this.body.position.x,this.body.position.y,this.radius)   
    imageMode(CENTER)
    image(this.img,this.body.position.x,this.body.position.y,this.radius*4,this.radius*4)
    pop()
}
}