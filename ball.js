class Ball{
  constructor(x,y){

    var options = {
      'restitution':0.3,
      'isStatic':false,
      'friction':0.5,
      'density':0.25
  }
      this.body = Bodies.circle(x,y,50,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.image=loadImage("5c434c20e39d5d01c21da945.png");
    
  }
  display(){


    var angle = this.body.angle;
    fill('yellow')
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,50,50);
    pop();
  }
}
