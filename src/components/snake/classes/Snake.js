import Entity from "./Entity";

export default class Snake extends Entity{
  constructor(x,y, width=10, height=10){
    super(x,y, width, height)
    // array of position of every snake part and the direction each square should move next iteration
    this.positions = [
      {
        x:x,
        y:y,
        direction:this.moveDirection
      }
    ];
  }
  // function for the snake (maybe should extend entity for this)
  // create another square that follows the previous one, and so on, all moves and folllow
  grow(direction){
    
    let newPosition = {...this.positions[this.positions.length - 1]}
    console.log(this.positions)
    console.log(this.direction)
    
    switch(direction){
      case 'up':
        //this.y -= this.step;
        newPosition.y = this.positions[this.positions.length -1].y + this.step
        break;
      case 'down':
        //this.y += this.step;
        newPosition.y = this.positions[this.positions.length -1].y - this.step
        break;
      case 'left':
        //this.x -= this.step;
        newPosition.x = this.positions[this.positions.length -1].x + this.step
        break;
      case 'right':
        //this.x += this.step;
        newPosition.x = this.positions[this.positions.length -1].x - this.step
        break;
    }
    this.positions.push(newPosition)
    console.log(this.positions)
  }

  movewhwole(direction){
    this.positions[0].direction = direction;
    for (let i = 0; i < this.positions.length; i++) {
      const element = this.positions[i];
      switch(element.direction) {
        case 'up':
          this.positions[i].y -= this.step;
          break;
        case 'down':
          this.positions[i].y += this.step;
          break;
        case 'left':
          this.positions[i].x -= this.step;
          break;
        case 'right':
          this.positions[i].x += this.step;
          break;
      } 
    }
  }

  updateDirections(direction){
    this.positions[0]['direction'] = direction;
    for (let i = 1; i < this.positions.length; i++) {
      this.positions[i]['direction'] = this.positions[i-1].direction
    }
  }
}