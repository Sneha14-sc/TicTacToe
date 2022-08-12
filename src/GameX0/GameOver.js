import React from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const GameOver = ({winplayer, modal, toggle}) => {
  return (
    <div className="popup">
      <Modal isOpen={modal} toggle={toggle} id="popup_box">
            <ModalHeader toggle={toggle}><h2 className='heading'>Winner of this round</h2></ModalHeader>
            <ModalBody>
                   <h1 className='Win'>
                        {winplayer}
                   </h1>
                
            </ModalBody>
            <ModalFooter><Button className="playAgain" onClick={toggle}>Play Again</Button></ModalFooter>
      </Modal>
      </div>
  )
}

export default GameOver
