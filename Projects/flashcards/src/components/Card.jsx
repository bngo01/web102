import React from "react"
import {useState} from "react"

import "./Card.css"

const Card = (props) => {

    const data = props.data
    const [card, setCard] = useState(data[0])
    const [isFront, setFront] = useState(true)

    const switchCard = (direction) => {
        if (direction === "Previous") {
            const prevIdx = Math.floor(Math.random() * data.length)
            const prevCard = data[prevIdx]
            setCard(prevCard)
            setFront(true)
        }
        else if (direction === "Next") {
            const nextIdx = Math.floor(Math.random() * data.length)
            const nextCard = data[nextIdx]
            setCard(nextCard)
            setFront(true)
        }
    }

    const getPrevCard = () => switchCard("Previous")
    const getNextCard = () => switchCard("Next")

    return (
        <div className="Card">
            <div className={`card ${card.difficulty}`} onClick={() => (setFront(isFront => !isFront))}>
                <div className={`card-inner ${isFront == true ? "front" : ""}`}>
                    <div className="card-front">
                        <p><b>{card.question}</b></p>
                        <img src={card.img} alt="logo image"></img>
                    </div>
                    <div className="card-back">
                        <p><b>{card.answer}</b></p>
                    </div>
                </div>
            </div>

            <div className="btn">
                <button onClick={getPrevCard}>Previous</button>
                <button onClick={getNextCard}>Next</button>
            </div>
        </div>
    )
}

export default Card