import React from 'react'
import {useNavigate} from 'react-router';

const NewGame = () => {
    let navigate =useNavigate();
    function redirect(){
        navigate('/');
} 
  return (
    <div>
      <button className="btn" onClick={redirect}>New Game</button>
    </div>
  )
}

export default NewGame
