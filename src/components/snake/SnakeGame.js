import React, { useEffect, useRef, useState } from "react";
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
  console.log(snake);
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
      setInterval(()=>{
        context.fillStyle = "red"
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = "blue"
        //context.fillRect(snake.x,snake.y,snake.width,snake.height)
        snake.positions.forEach(position => {
          context.fillRect(position.get('x'),position.get('y'),snake.width,snake.height)
        });
        if(food){
          context.fillStyle = "yellow";
          context.fillRect(food.x,food.y,baseSquareSize,baseSquareSize);
        }

        
        snake.movewhwole(direction)
      
        
        
        if(checkCollision(snake.positions[0],food)){
          count++;
          console.log(count+'!!!')
          food = createFood(context)
          snake.grow(direction)
        }
       
      },frame)
      
    },[]
  )

  const controlHandler = ({key}) => {
    direction = key.substring(5).toLowerCase();
    
  }
  
  const createFood = (context)=>{
    let food = new Entity(randomNum(0,canvasWidth),randomNum(0,canvasHeight))
    context.fillStyle = "yellow"
    context.fillRect(food.x,food.y,baseSquareSize,baseSquareSize)
    return food
  }


  //check collision between two enntities
  // TODO: improve collision mechanism
  const checkCollision = (entity1, entity2)=>{

    if(entity1.get('x') > entity2.x &&  
      entity1.get('x') < entity2.x + entity2.width && 
      entity1.get('y') > entity2.y &&
      entity1.get('y') < entity2.y + entity2.height){
        return true
      }
      return false
  }
  return(
    <canvas ref={snakeGame}></canvas>
  )
}