import React from "react";

const Museums = (props) => {
    return (
        <div className={"Museums "}>
            <a href={props.link}><img src={props.img}/></a>
            <div className="text">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
            <a href={props.link}><button>Learn More</button></a>
        </div>
    )
}

export default Museums