class Log{
constructor(x,y,height,angle){
  var option={
'friction':1.0


}
this.body=Bodies.rectangle(x,y,30,height,angle,option)
this.height=height
this.width=30
Matter.Body.setAngle(this.body,angle)   
World.add(world,this.body)
}
display(){
var pos =this.body.position;
var angle = this.body.angle;
push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0,this.width,this.height);
      pop();
}    

}










