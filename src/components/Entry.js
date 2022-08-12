import React, {useState} from 'react'
import {useNavigate} from 'react-router'
import './entry.css'

var P1,P2;
const Entry = () => {
    const [player1,setPlayer1] = useState('');
    const [player2, setPlayer2] = useState(''); 
    let navigate =useNavigate();
    const handleChange1= (e) =>{
        setPlayer1(e.target.value);
        }

    const handleChange2 = (e) =>{
        setPlayer2(e.target.value);        
    }
    function redirect(){
            navigate('/game');
            P1 = player1;
            P2 = player2;
    } 

  return (
    <div className="entryPage">
      <h1 className='text_shadows'>Tic Tac Toe</h1>
      <div className="players">
        <h3 className='h3'>Players</h3>
      <input type="input" value={player1} name="player1" onChange = {handleChange1} placeholder='Enter first Player name' required/><br/>
      <input type="input" value={player2} name="player2" onChange={handleChange2} placeholder='Enter Second Player name' required/><br/>
      <button className="glow-on-hover" onClick={redirect}>Let's Start the Game</button>
      </div>
      <div className='footer'>Game app using React</div>
    </div>
  )
}
export default Entry

export {P1,P2}
