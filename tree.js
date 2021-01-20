class tree{
    constructor(x,y,w,h){
        this.img= loadImage("Plucking mangoes/tree.png")
        this.width=w;
        this.height=h;
        var properties={
            isStatic:true
        }
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,properties)
        Matter.World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.img,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}