class Dustbin {
  constructor(x,y,width,height) {
    
    this.width = width;
    this.height = height;
    this.image=loadImage("DUSTBIN-removebg-preview.png");

  }
  display(){
    
    imageMode(CENTER);
    fill("brown");
    image(this.image,width-250,height-20-10-5-10-50-10, this.width, this.height);
  }
};
