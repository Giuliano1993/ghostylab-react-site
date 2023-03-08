import Entity from "./Entity";

export default class Snake extends Entity{
  constructor(x,y, width=10, height=10){
    super(x,y, width, height)
    // array of position of every snake part and the direction each square should move next iteration
    this.positions = [
      new Map([
        ['x',x],
        ['y',y],
        ['direction',this.moveDirection],
      ])
    ];
  }
  // function for the snake (maybe should extend entity for this)
  // create another square that follows the previous one, and so on, all moves and folllow
  grow(direction){
    
    let newPosition = new Map(this.positions[this.positions.length - 1])
    switch(direction){
      case 'up':
        newPosition.set('y', this.positions[this.positions.length -1].get('y') + this.step)
        break;
      case 'down':
        newPosition.set('y', this.positions[this.positions.length -1].get('y') - this.step)
        break;
      case 'left':
        newPosition.set('x', this.positions[this.positions.length -1].get('x') + this.step)
        break;
      case 'right':
        newPosition.set('x', this.positions[this.positions.length -1].get('x') - this.step)
        break;
      default:
        break;
    }
    this.positions.push(newPosition)
  }

  movewhwole(direction){
    const vertMove = ['up','down'];
    const orizMove = ['left','right'];

    if(this.positions[0].get('direction') !== direction && 
    ((vertMove.includes(this.positions[0].get('direction')) && vertMove.includes(direction)) || (orizMove.includes(this.positions[0].get('direction')) && orizMove.includes(direction)) || (!orizMove.includes(direction) && !vertMove.includes(direction)) )) direction = this.positions[0].get('direction')
    this.positions[0].set('direction',direction)
    let prevPosition = null;
    let nextPosition = null;
    for (let i = 0; i < this.positions.length; i++) {
      const element = this.positions[i];
      prevPosition = new Map(nextPosition)
      nextPosition = new Map(element)
      if(i === 0){
        switch(element.get('direction')) {
          case 'up':
            this.positions[i].set('y', this.positions[i].get('y') - this.step);
            break;
          case 'down':
            this.positions[i].set('y', this.positions[i].get('y') + this.step);
            
            break;
          case 'left':
            this.positions[i].set('x', this.positions[i].get('x') - this.step);
            break;
          case 'right':
            this.positions[i].set('x', this.positions[i].get('x') + this.step);
            break;
          default:
            break;
        } 
      }else{
        this.positions[i] = prevPosition
      }
    }
  }

}