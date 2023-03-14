import React from "react"
import {useState} from "react"

import "./Card.css"

const Card = (props) => {

    const data = props.data
    const [card, setCard] = useState(data[0])
    const [isFront, setFront] = useState(true)

    const [userInput, setUserInput] = useState("")
    const [userAnswer, setUserAnswer] = useState(-1)
    const [isCorrect, setIsCorrect] = useState(false)
    // const [output, setOuput] = useState("")

    // console.log(card.id)

    const switchCard = (direction) => {
        if (direction === "Previous") {
            const prevIdx = card.id - 1
            // console.log(prevIdx)
            if (prevIdx >= 0){
                const prevCard = data[prevIdx]
                setCard(prevCard)
                setFront(true)
                setUserInput("")
                setUserAnswer(-1)
                setIsCorrect(false)
            }
        }
        else if (direction === "Next") {
            const nextIdx = card.id + 1
            // console.log(nextIdx)
            if (nextIdx < data.length){
                const nextCard = data[nextIdx]
                setCard(nextCard)
                setFront(true)
                setUserInput("")
                setUserAnswer(-1)
                setIsCorrect(false)
            }
        }
        else if (direction === "Random") {
            const randomIdx = Math.floor(Math.random() * (data.length))
            const randomCard = data[randomIdx]
            setCard(randomCard)
            setFront(true)
            setUserInput("")
            setUserAnswer(-1)
            setIsCorrect(false)
        }
    }

    const getPrevCard = () => switchCard("Previous")
    const getNextCard = () => switchCard("Next")
    const getRandomCard = () => switchCard("Random")

    const handleCheckAnswer = () => {
        const answer = card.answer.toUpperCase().split("")
        const userAnswer = userInput.toUpperCase().split("")
        let matches = 0

        for(let i = 0; i < answer.length; i++){
            if (userAnswer.includes(answer[i])){
                matches += 1
            }
        }

        if (matches === answer.length){
            setUserAnswer(1)
            setIsCorrect(true)
        }
        else {
            setIsCorrect(false)
            setUserAnswer(0)
        }
    }

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

            <div className="footer">
                <div className="answer">
                    {
                        (() => {
                            if (userAnswer === 1 && isCorrect === true){
                                return (<p>Correct answer! 🥳</p>)
                            }
                            else if (userAnswer === 0 && isCorrect === false){
                                return (<p>Incorrect answer. Try again!</p>)
                            }
                            else {
                                return (<p>Enter your answer!</p>)
                            }
                        })()
                    }
                    {/* <p>{userAnswer === 100 ? {isCorrect === true ? "" : ""} : {"Enter the answer!"}}</p> */}
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Guess the logo..."
                        value={userInput}
                        onChange={(e) => {setUserInput(e.target.value); setUserAnswer(-1)}}
                    />
                    <button className="check-answer-btn" onClick={handleCheckAnswer}>Check Answer!</button>
                </div>
                
                <div className="prev-next-btn">
                    <button onClick={getPrevCard} className={"" + (card.id === 0 ? "inactive" : "active")}>{"⬅️ Previous"}</button>
                    <button onClick={getNextCard} className={"" + (card.id === 16 ? "inactive" : "active")}>{"Next ➡️"}</button>
                </div>
                <div className="shuffle-btn">
                    <button onClick={getRandomCard}>🔀 Shuffle 🔀</button>
                </div>
            </div>
        </div>
    )
}

export default Card