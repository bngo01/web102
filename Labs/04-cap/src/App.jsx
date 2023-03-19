import { useState } from 'react'
import './App.css'
import APIForm from "./components/APIform.jsx"
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

function App() {
  const [inputs, setInputs] = useState({
    url: "http://google.com",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "100",
    height: "100",
  })

  const submitForm = () => {
    
  }

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />
      <br></br>

    </div>
  )
}

export default App
