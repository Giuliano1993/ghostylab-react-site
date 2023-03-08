import React, { useEffect, useRef } from "react";
import Entity from "./classes/Entity";
import Snake from "./classes/Snake";



export default function SnakeGame(){
  const snakeGame = useRef(null);
  const frame = 50;
  const baseSquareSize = 10;
  const canvasWidth = 600;
  const canvasHeight = 600;

  
  const randomNum = (min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
  }
  let snake = new Snake(randomNum(0,canvasWidth), randomNum(0,canvasHeight))
  let direction = 'right';
  let count = 0;
  useEffect(
    ()=>{
      window.addEventListener('keydown',controlHandler);
      const canvas = snakeGame.current; 
      const context = canvas.getContext("2d");
      canvas.height = canvasWidth;
      canvas.width = canvasHeight;
        
      context.fillStyle = "red"
      context.fillRect(0, 0, canvas.width, canvas.height)
      let food = createFood(context)
      let gameLoop = setInterval(()=>{
        context.fillStyle = "red"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = "blue"
        snake.positions.forEach(position => {
          context.fillRect(position.get('x'),position.get('y'),snake.width,snake.height)
        });
        if(food){
          context.fillStyle = "yellow";
          context.fillRect(food.x,food.y,baseSquareSize,baseSquareSize);
        }
        if(checkWallCollision(snake)){
          
          context.font = "48px monospace";
          context.fillText("Game Over", 170, 300);
          context.font = "20px monospace";
          context.fillText(`Total score: ${snake.positions.length}`, 230, 330);
          clearInterval(gameLoop);
        }
        snake.movewhwole(direction)
        if(checkCollision(snake.positions[0],food)){
          count++;
          food = createFood(context)
          snake.grow(direction)
        }
        
       
      },frame)
      
    }
  )

  const controlHandler = ({key}) => {
    direction = key.substring(5).toLowerCase();
  }
  
  const createFood = (context)=>{
    let food = new Entity(randomNum(0,canvasWidth-baseSquareSize),randomNum(0,canvasHeight-baseSquareSize))
    context.fillStyle = "yellow"
    context.fillRect(food.x,food.y,baseSquareSize,baseSquareSize)
    return food
  }

  const checkWallCollision = (snake) => {
    const head = snake.positions[0];
    if((head.get('direction') === 'left' && head.get('x') <= 0) ||
      (head.get('direction') === 'right' && head.get('x')+baseSquareSize >= canvasWidth) ||
      (head.get('direction') === 'up' && head.get('y') <= 0) ||
      (head.get('direction') === 'down' && head.get('y')+baseSquareSize  >= canvasHeight)
      ) return true;
      return false
  }


  //check collision between two enntities
  const checkCollision = (entity1, entity2)=>{

    if(((entity1.get('x') >= entity2.x && entity1.get('x') < entity2.x + entity2.width) || (entity1.get('x') + baseSquareSize >= entity2.x && entity1.get('x') + baseSquareSize <= entity2.x + entity2.width) ) && 
     (( entity1.get('y') > entity2.y && entity1.get('y') < entity2.y + entity2.height) || (entity1.get('y') + baseSquareSize > entity2.y && entity1.get('y') + baseSquareSize < entity2.y + entity2.height))){
        return true
      }
      return false
  }
  return(
    <canvas ref={snakeGame}></canvas>
  )
}