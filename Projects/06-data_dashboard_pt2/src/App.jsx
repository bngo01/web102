import { useState, useEffect } from 'react'
import './App.css'
import Brew from "./components/Brew.jsx"
import {Link} from "react-router-dom"

function App() {
  const [brewery, setBrewery] = useState([])
  const [totalBreweries, setTotalBreweries] = useState(0)
  const [totalCities, setTotalCities] = useState({})
  const [totalTypes, setTotalTypes] = useState({})
  const [filter, setFilter] = useState({size : "", zipcode: ""})

  const fetchAPI = async (size = "", zipcode = "") => {
    const json = await ( await fetch(`https://api.openbrewerydb.org/v1/breweries?per_page=99${zipcode != "" ? "&by_postal=" + zipcode : ""}${size != "" ? "&by_type=" + size : ""}`)).json()
    
    setTotalBreweries(json.length)
    setBrewery(json)

    json.map((i) => {
      setTotalCities((k) => {
        let counter = i.city in k ? k[i.city] + 1 : 1
        return {...k, [i.city] : counter}
      })
      setTotalTypes((k) => {
        let counter = i.brewery_type in k ? k[i.brewery_type] + 1 : 1
        return {...k, [i.brewery_type] : counter}
      })
    })
  }

  const handleInputChange = (e) => {
    setFilter((k) => {
      return {...k, [e.target.name] : e.target.value}
    })
  }

  const handleSubmit = () => {
    setTotalCities({})
    setTotalTypes({})
    console.log(filter)
    fetchAPI(filter.size, filter.zipcode)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="App">
      <h1>Looking for a Brewery?</h1>
      <h3>Find a brewery near you:</h3>

      <div className="Summary">
        <div className="Sum Total">
          <b>Total</b>
          <p>{totalBreweries}</p>
        </div>
        <div className="Sum Cities">
          <b>Cities</b>
          <p>{Object.keys(totalCities).length}</p>
        </div>
        <div className="Sum Types">
          <b>Types</b>
          <p>{Object.keys(totalTypes).length}</p>
        </div>
      </div>

      <div className="Filter">
        <label htmlFor="size">Types: </label>
        <select id="size" name="size" onChange={handleInputChange}>
          <option value=""></option>
          <option value="nano">Nano</option>
          <option value="micro">Micro</option>
          <option value="large">Large</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="bar">Bar</option>
        </select>

        <br></br>

        <label htmlFor="zipcode">Zipcode: </label>
        <input id="zipcode" name="zipcode" type="text" pattern="[0-9][0-9][0-9][0-9][0-9]" placeholder="Enter zipcode..." value={filter.zip} onChange={handleInputChange}/>
        
        <br></br>

        <button onClick={handleSubmit}>Search</button>      
      </div>

      {brewery.map((i) => {
        return (
          <Link key={i.id} to={`/detail/${i.id}`} 
            state={{
              id : i.id,
              name : i.name,
              address : `${i.street}, ${i.city}, ${i.state}, ${i.postal_code}`,
              longitude : i.longitude,
              latitude : i.latitude,
              type : i.brewery_type,
              website : i.website_url,
              phone : i.phone
            }}
          >
            <Brew name={i.name} street={i.street} city={i.city} state={i.state} postal={i.postal_code.slice(0, 5)} />
          </Link>
        )
      })}

    </div>
  )
}

export default App
