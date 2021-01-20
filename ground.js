class ground{
    constructor(x,y,w,h){
        this.width=w   
        this.height=h 
        var properties= {isStatic:true}
        this.body=Matter.Bodies.rectangle(x, y, this.width, this.height, properties)
        Matter.World.add(world,this.body)
    }
    display(){
        push()
        rectMode(CENTER)
        fill(" #654321")
        var star=this.body.position
        rect(star.x,star.y,this.width,this.height)
        pop()   
    }
}