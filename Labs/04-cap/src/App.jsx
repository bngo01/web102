import { useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

function App() {
  const [inputs, setInputs] = useState({
    url: "http://google.com",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "100",
    height: "100",
  });

  return (
    
  )
}

export default App
