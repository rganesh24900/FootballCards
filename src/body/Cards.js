import React from 'react'
import Card from './Card'
import './Card.css' 

function Cards() {
    const cards = [
        {
            "playerName": "C.Ronaldo",
            "dribble": 96,
            "speed": 98,
            "weakFootAcc": 4,
            "playingStyle": "Aggresive",
            "playerPos": "LWF",
            "jerseyNumber": 7
        },
        {
            "playerName": "",
            "dribble": null,
            "speed": null,
            "weakFootAcc": null,
            "playingStyle": "",
            "playerPos": "",
            "jerseyNumber": null
        },
        {
            "playerName": "Kaka",
            "dribble": 97,
            "speed": 91,
            "weakFootAcc": 4,
            "playingStyle": "Conservative",
            "playerPos": "CAM",
            "jerseyNumber": 8
        }
    ]
  return (
    <div className='d-flex body-content'>{cards.map(card =>
        <div>
            <Card playerName={card.playerName} dribble={card.dribble} speed={card.speed} weakFootAcc={card.weakFootAcc}
            playingStyle={card.playingStyle} playerPos={card.playerPos} jerseyNumber={card.jerseyNumber}
            />
        </div>
    )}</div>
  )
}

export default Cards