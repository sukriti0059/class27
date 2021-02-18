class Slingshot{
    constructor(a,b){
    var options = {
        bodyA:a,
        bodyB:b,
        stiffness:0.04,
        length:10
    }
    this.Slingshot = Matter.Constraint.create(options)
    World.add(world, this.Slingshot);
    }
 display(){
 var posA= this.Slingshot.bodyA.position
 var posB= this.Slingshot.bodyB.position
 line(posA.x,posA.y,posB.x,posB.y)
 }
    
}
