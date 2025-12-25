import React, { useEffect } from 'react'
import Square from './Square'
import { useState } from 'react'
const Board = () => {    
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXturn, setIsXturn] = useState(true);
    const clickHandler = (index) => {
        console.log(index);
        const copyState = [...squares];
        copyState[index] = isXturn ? "X" : "O";
        setSquares(copyState);
        setIsXturn(!isXturn);
      };

    const checkWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
          ) {
            return squares[a];
          }
        }
        return null;
    }
    // useEffect(() => {
    //     const winner = checkWinner(squares);
    //     if (winner) {
    //       alert(`Winner is ${winner}`);
    //       setSquares(Array(9).fill(null));
    //     } else if (!squares.includes(null)) {
    //       alert("Draw");
    //       setSquares(Array(9).fill(null));
    //     }
    // },[squares]);
  return (
    checkWinner(squares)?<>
    <div>Winner is {checkWinner(squares)}</div>
    <button onClick={() => setSquares(Array(9).fill(null))}>Reset</button>
    </>
    :
    <>
    
    <div className='Rows flex'>
        <Square onClick = {()=>{clickHandler(0)}} value = {squares[0]}/>
        <Square onClick = {()=>{clickHandler(1)}} value = {squares[1]}/>
        <Square onClick = {()=>{clickHandler(2)}} value = {squares[2]}/>
    </div>
    <div className='Rows flex'>
        <Square onClick = {()=>{clickHandler(3)}} value = {squares[3]}/>
        <Square onClick = {()=>{clickHandler(4)}} value = {squares[4]}/>
        <Square onClick = {()=>{clickHandler(5)}} value = {squares[5]}/>
    </div>
    <div className='Rows flex'>
        <Square onClick = {()=>{clickHandler(6)}} value = {squares[6]}/>
        <Square onClick = {()=>{clickHandler(7)}} value = {squares[7]}/>
        <Square onClick = {()=>{clickHandler(8)}} value = {squares[8]}/>
    </div>
    </>
  )
}

export default Board