import React from 'react'
import {P1,P2} from '../components/Entry';
import './Board.css';


const ScoreBoard = ({scores, player}) => {
    const { xScore, oScore} = scores;

  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!player && "inactive"}`}>{P1} [X]- {xScore}</span>
      <span className={`score o-score ${player && "inactive"}`}>{P2} [O]- {oScore}</span>
    </div>
  )
}

export default ScoreBoard
