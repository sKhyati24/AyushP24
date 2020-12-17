class Paper{
    constructor(x,y) {
        var options = {
            'isStatic':false,
            'restitution':0.5,
            'friction':0.3,
            'density':1.2
        }
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple");
    }
}