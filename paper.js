class Paper {
  constructor(x, y, radius, options) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          fricition: 0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.x = x;
      this.y = y;
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate();
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x,pos.y,this.radius);      
      pop();
    }
  };
