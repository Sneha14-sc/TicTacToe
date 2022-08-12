import React from 'react'

const Box = ({value, onClick}) => {
    const style = value === "X"? "box x": "box o"
  return (
    <div className='container'>
       <button className={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Box
