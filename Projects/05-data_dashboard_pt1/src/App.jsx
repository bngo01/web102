import { useState, useEffect } from 'react'
import CardList from "./components/CardList.jsx"
import ForecastList from "./components/ForecastList.jsx"
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY

function App() {

  const [zipcode, setZipcode] = useState("20853")
  const [locationHistory, setLocationHistory] = useState(null)
  const [info, setInfo] = useState({
    cityName: "",
    timezone: "",
    tempCel: "",
    cloudCondition: "", 
    description: ""
  })

  useEffect(() => {
    const fetchFutureWeatherInfo = async () => {
      const json = await (await fetch (`https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zipcode}&key=${API_KEY}`)).json()
      console.log(json)
      setLocationHistory(json)
    }
    fetchFutureWeatherInfo().catch(console.error)
  }, [zipcode])

  useEffect(() => {
    const fetchCurrentWeatherInfo = async () => {
      const json = await (await fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${zipcode}&key=${API_KEY}`)).json()
      setInfo({
        cityName: json.data[0]["city_name"],
        timezone: json.data[0]["timezone"],
        tempCel: json.data[0]["temp"],
        cloudCondition: json.data[0]["clouds"],
        description: json.data[0]["weather"].description
      })
    }
    fetchCurrentWeatherInfo().catch(console.error)
  }, [zipcode])

  const changeZipcode = (e) => {
    if (e.target.value == "") {
      setZipcode("20853")
    }
    setZipcode(e.target.value)
  }

  return (
    <div className="whole-page">
      <div className="header">
        <h4><i className="fa-solid fa-cloud-sun-rain">The Weather App</i></h4>
        <label>Enter Zipcode</label>
        
        <br></br>

        <input type="text" placeholder="Enter zipcode here..." onChange={changeZipcode}/>
      </div>
      <div className="main-page">
        <h2><u>Welcome to the CodePath Weather App!</u></h2>
        <CardList 
          cityName={info.cityName}
          timezone={info.timezone}
          tempCel={info.tempCel}
          cloudCondition={info.cloudCondition}
          description={info.description}
        />
        <ForecastList list={locationHistory} />
      </div>
    </div>
  )
}

export default App
