import './entry.css'
import React,{useState} from 'react'
import {P1,P2} from './Entry'
import Board from "../GameX0/Board"
import ScoreBoard from '../GameX0/ScoreBoard'
import NewGame from './NewGame'
import GameOver from '../GameX0/GameOver'

const Game = () => {

    /* the array of win pattern which latter will be checked while validating the winner */
    const Win_Check=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]


    const [board,setBoard] = useState(Array(9).fill(null))
    const [xPlayer,setXPlayer] = useState(true);
    const [scores,setScore] = useState({xScore: 0,oScore: 0});
    const [end,setEnd] = useState(false);
    const [flag, setflag] = useState(false);
    const [Player,setPlayer] = useState("");

    /** whenever the button on the board is clicked this function will trigger */
    const handleBoard =(boxId) =>{
        // to change the value of element on board
        const changeBoardv = board.map((value, id)=>{
            if(id === boxId){
                return xPlayer === true ? "X": "O";
            }
            else{
                return value;
            }
        })
        
        // here we check won win the game  'X' or 'O'
        const winner =  verifyWin(changeBoardv)
        if(winner){
            
            if(winner === "O"){
                let {oScore} =scores;
                oScore +=1;
                setScore({...scores,oScore})
                setPlayer(P2);
                
            }
            else{
                let {xScore} =scores;
                xScore +=1;
                setScore({...scores,xScore})  
                setPlayer(P1)              
            } 
            setflag(true)
        }
        //once checked again set the board
        setBoard(changeBoardv)
        
        //setting the value of player in boolean 
        setXPlayer(!xPlayer)
        
        //this condition checks if no one win and all the elements are filled the reset the board
        if(changeBoardv.every( (i) => {return i !==null})){
           // setDraw(true);
            resetBoard();
        }
        
        
    }

    // to reset with board with null entry
    const resetBoard =() =>{
        setEnd(false);
        setBoard(Array(9).fill(null))
    }
            
    /* to verify with the array declared before which player wins and matches the win array*/
    const verifyWin =(board) =>{
        for(let i=0; i<Win_Check.length; i++){
            const [x,y,z] =Win_Check[i]

            if(board[x] && board[x] === board[y] && board[y] === board[z]){
                setEnd(true);
                return board[x];
            }
        }
    }
    // to clear the win history count
    const clearWinHistory =() =>{
        setScore({xScore:0, oScore:0})
        resetBoard();
    }
    const toggle =()=>{
        setflag(!flag);
    }

  return (
    <div className='gamePage'>
        <div className='texture'>
                <h1 className='headGame'> Game starts Here...</h1>
                <ScoreBoard scores={scores} player={xPlayer}/>
                <div className="line"></div>
                <Board name={board} onClick={end ? resetBoard: handleBoard}/>
                <GameOver  winplayer={Player} modal = {flag} toggle ={toggle}/>
        </div><br/>
        <div className='buttons'>
            <button className="btn" onClick={resetBoard}>Reset</button>
            <button className="btn" onClick={clearWinHistory}>Clear History</button>
            <NewGame/>
        </div>
        
    </div>
  )
}

export default Game