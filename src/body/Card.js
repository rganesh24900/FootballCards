import React from 'react'

function Card(props) {
   
  return (
    <div className='h-card'>
      <ul style={{listStyleType:'none'}} className='list-border'>
      <li className='pos-abs top-5 left-5 z-1'>{props.jerseyNumber}</li>
      <li><img src='./../images/playerImages/ronaldo2.png' alt='ronaldo' id='playerImg'/></li>
        <li>
          {props.playerName}
        </li>
        {/* <li>
          {props.dribble}
        </li>
        <li>{props.speed}</li>
        <li>{props.playingStyle}</li> */}
        <li>{props.playerPos}</li>
        {/* <li>{props.weakFootAcc}</li> */}
        
      </ul>
    </div>
  )
}

export default Card

