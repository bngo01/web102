import React, { Components, useEffect, useState } from "react"

const RecipeChoices = ({handleChange, label, choices, currentVal}) => {
    return (
        <div>
            <div className="radio-buttons">
                <input
                    type="text"
                    name={label}
                    value={currentVal}
                    placeholder="Guess the ingredient..."
                    // onChange={handleChange}
                    className = "textbox"
                    />
                {choices && choices.map((choice) => (
                    <li key={choice}>
                        <input id={choice} value={choice} name={label} type="radio" onChange={handleChange} checked={currentVal == choice}/>
                        {choice}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default RecipeChoices