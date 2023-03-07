import React from "react"
import Card from "./Card.jsx"
import "./Template.css"

import spotify_logo1 from "../assets/img/spotify_logo1.png"
import facebook_logo2 from "../assets/img/facebook_logo2.png"
import pepsi_logo3 from "../assets/img/pepsi_logo3.png"
import twitter_logo4 from "../assets/img/twitter_logo4.png"
import adidas_logo5 from "../assets/img/adidas_logo5.png"
import maserati_logo6 from "../assets/img/maserati_logo6.png"
import audi_logo7 from "../assets/img/audi_logo7.png"
import nestle_logo8 from "../assets/img/nestle_logo8.png"
import cadillac_logo9 from "../assets/img/cadillac_logo9.png"
import lamborghini_logo10 from "../assets/img/lamborghini_logo10.png"
import honda_logo11 from "../assets/img/honda_logo11.png"
import pizza_hut_logo12 from "../assets/img/pizza_hut_logo12.png"
import ikea_logo13 from "../assets/img/ikea_logo13.png"
import thai_airline_logo14 from "../assets/img/thai_airline_logo14.png"
import ubuntu_logo15 from "../assets/img/ubuntu_logo15.png"
import altria_logo16 from "../assets/img/altria_logo16.png"
import cisco_logo17 from "../assets/img/cisco_logo17.png"

const Template = () => {

    const question = "What is this logo?"
    const data = [ 
        { question : question, answer : "Spotify", img : spotify_logo1, difficulty : "easy"}, 
        { question : question, answer : "Facebook", img : facebook_logo2, difficulty : "easy"}, 
        { question : question, answer : "Pepsi", img : pepsi_logo3, difficulty : "easy" }, 
        { question : question, answer : "Twitter", img : twitter_logo4, difficulty : "easy" }, 
        { question : question, answer : "Adidas", img : adidas_logo5, difficulty : "easy"},
        { question : question, answer : "Maserati", img : maserati_logo6, difficulty : "hard" },
        { question : question, answer : "Audi", img : audi_logo7, difficulty : "medium" },
        { question : question, answer : "Nestle", img : nestle_logo8, difficulty : "medium" },
        { question : question, answer : "Cadillac", img : cadillac_logo9, difficulty : "medium" },
        { question : question, answer : "Lamborghini", img : lamborghini_logo10, difficulty : "easy" },
        { question : question, answer : "Honda", img : honda_logo11, difficulty : "easy" },
        { question : question, answer : "Pizza Hut", img : pizza_hut_logo12, difficulty : "easy" },
        { question : question, answer : "Ikea", img : ikea_logo13, difficulty : "medium" },
        { question : question, answer : "Thai Airline", img : thai_airline_logo14, difficulty : "hard" },
        { question : question, answer : "Ubuntu", img : ubuntu_logo15, difficulty : "hard" }, 
        { question : question, answer : "Altria", img : altria_logo16, difficulty : "hard" }, 
        { question : question, answer : "Cisco", img : cisco_logo17, difficulty : "hard" } ]


    return (
        <div className="Template">
            <div className="header">
                <h2>Welcome to CodePath's Best Logo Quiz!</h2>
                <h4>Do you know think you know a lot of logos? Test your knowledge here!</h4>
                <h5>Number of Cards: {data.length}</h5>


            </div>

            <Card data={data}/>
        </div>
    )
    
}

export default Template