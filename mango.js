class mango{
    constructor(x,y,r){
    this.img=loadImage("mango4.png")
    this.radius=r
    var properties={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.body=Matter.Bodies.circle(x,y,r,properties)
    Matter.World.add(world,this.body)
}
display(){
    push()
    imageMode(CENTER)
    translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
    image(this.img, 0,0, this.radius*4, this.radius*4) 
    pop()
}}