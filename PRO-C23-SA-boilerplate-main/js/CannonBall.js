class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.trajectry = [];
    World.add(world, this.body);
  }


  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
    if(this.body.velocity.x > 0 && pos.x > 10){
      var position = [pos.x, pos.y];
      this.trajectry.push(position);
    }
    for(let i = 0;i < this.trajectry.length ; i++);{
      image(this.image, this.trajectry[i][0], this.trajectry[i][1], 5, 5);
    }
  }
  shoot(){
    var newAngle = cannon.angle-25;
    newAngle = newAngle *(3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body,false);
    Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});

  }
}
