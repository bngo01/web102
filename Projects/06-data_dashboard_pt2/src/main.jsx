import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import NavBar from "./routers/NavBar.jsx"
import Detail from "./routers/Detail.jsx"
import Analysis from "./routers/Analysis.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<NavBar />}>
          <Route path = "/" index element = {<App />}/>
          <Route path = "/detail/:id" element = {<Detail />}/>
          <Route path = "/analysis" element = {<Analysis />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
