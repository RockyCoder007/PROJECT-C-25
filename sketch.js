const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball,ground,ground2,ground3,dustbin;
function preload(){

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(width/2,height-20,width,10);
    ground2=new Ground(width/2,-200,width,10);
    box1=new Box(width-250,height-20-5-10,200,20);
    box2=new Box(width-250-box1.width/2+10,height-20-10-5-10-50-25+10,20,140);
    box3=new Box(width-250+box1.width/2-10,height-20-10-5-10-50-25+10,20,140);
    ball=new Ball(200,200);
    dustbin=new Dustbin(width-250,height-20-10-5-10-50-10,200,160)
    ground3=new Ground(width-250+100-10,1,1,height*2);


}

function draw(){
     background("black");
     Engine.update(engine);
     ground.display();

     ball.display();
      dustbin.display();
}
function keyPressed(){
    if(keyCode===UP_ARROW&&ball.body.position.y>325){
        Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
    
       }
}