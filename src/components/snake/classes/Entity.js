export default class Entity{
  constructor(x,y, width=10, height=10) {
    this.x = x;
    this.y =y;
    this.width = width;
    this.height = height;
    this.step = 5;
    this.moveDirection = 'right'
  }

  move(direction){
    //this.moveDirection = direction
    switch(direction) {
      case 'up':
        this.y -= this.step;
        break;
      case 'down':
        this.y += this.step;
        break;
      case 'left':
        this.x -= this.step;
        break;
      case 'right':
        this.x += this.step;
        break;
    } 
  }
  
}