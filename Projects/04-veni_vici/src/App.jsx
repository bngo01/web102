import { useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

function App() {

  const [history, setHistory] = useState([])
  const [dogInfo, setDogInfo] = useState(null)
  const [banList, setBanList] = useState ({origin: [], lifespan: [], weight: []})

  const fetchAPI = async () => {
    const json = await (await fetch (`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`)).json()
    // console.log(json)
    const url = json[0].url
    const breed = json[0].breeds[0]
    const info = {
      image: url,
      name: breed.name,
      description: breed.description,
      origin: breed.origin,
      lifespan: breed.life_span,
      weight: breed.weight.imperial
    }

    setDogInfo(info)
    // store history
    setHistory((prev) => [...prev, info])
  }

  const addBanList = (e) => {
    const k = e.target.name
    const v = e.target.value

    if (banList[k].includes(v))
      return
    else {
      setBanList((prev) => ({
        ...prev, [k]: [...prev[k], v]
      }))
    }
  }

  const removeBanList = (e) => {
    const key = e.target.name
    const value = e.target.value
    const i = banList[key].indexOf(value)
    const lst = banList[key]
    lst.splice(i, 1)
    setBanList((prev) => ({
      ...prev, [key] : lst
    }))
  }

  return (
    <div className="whole-page">
      <div className="left-history-panel">
        <h3>History</h3>
        {history && history.map((dog, key) => (
          <div>
            <p>{dog.name}</p>
            <img className="dog-img" src={dog.image}/>
          </div>
        ))}
      </div>

      <div className="middle-panel">
        <h1>Every day is a Cat Day 🐈</h1>
        {dogInfo ? (
          <div className="dog-info">
            <h2>{dogInfo.name}</h2>
            {/* <p style={{ fontSize: "12px", margin: "0 50px" }}>{catInfo.desc}</p> */}
            <p className="dog-description">{dogInfo.description}</p>
            <button name="origin" value={dogInfo.origin} onClick={addBanList}>
              {dogInfo.origin}
            </button>
            <button name="weight" value={dogInfo.weight} onClick={addBanList}>
              {dogInfo.weight} lbs
            </button>
            <button name="lifespan" value={dogInfo.lifespan} onClick={addBanList}>
              {dogInfo.lifespan} years
            </button>
            <img src={dogInfo.image} />
          </div>
        ) : (
          <div>Click the below button to discover dogs.</div>
        )}
        <button className="discover" onClick={fetchAPI}>
          🔀 Click me!
        </button>
      </div>

      <div className="right-banlist-panel">
        <h3>Ban List</h3>
        <p>Select an attribute in your listing to ban it</p>
        {banList && Object.entries(banList).map((key_list) => {
          let i = key_list[0]
          if (i === "weight"){
            return key_list[1].map((value) => (
              <button name={i} value={value} onClick={removeBanList}>
              {value} lbs
            </button>
          ));
          } 
          else if (i === "lifespan") {
            return key_list[1].map((value) => (
              <button name={i} value={value} onClick={removeBanList}>
                {value} years
              </button>
            ));
          } 
          else if (i === "origin") {
            return key_list[1].map((value) => (
              <button name={i} value={value} onClick={removeBanList}>
                {value}
              </button>
            ));
          }
        })}
      </div>
    </div>  
  )
}

export default App