class Polygon extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    Matter.Bodies.polygon(x, y, 5 , 10)
  }

  display() {
    
    super.display();
  }
}
