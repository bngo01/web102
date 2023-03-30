import React from "react"

const CardList = ({ cityName, timezone, tempCel, description, cloudCondition }) => {
    // console.log(cityName, timezone, tempCel, description, cloudCondition)
    return (
        <div className="cardlist-cont">
            <div className="card">
                <h4>{cityName}</h4>
                <p>{timezone}</p>
            </div>
            <div className="card">
                <h4>{tempCel}ºC</h4>
                <p>Celsius <i className="fa-solid fa-temperature-low"></i></p>
            </div>
            <div className="card">
                <h4>{description}</h4>
            </div>
            <div className="card">
                <h4>{cloudCondition}%</h4>
                <p>Cloud coverage</p>
            </div>
        </div>
    )
}

export default CardList