import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './routes/Layout.jsx';
import { useRoutes } from "react-router-dom"
import DetailView from './routes/DetailView';


// let element = useRoutes([
//   {
//     path: "/",
//     element: <Layout />
//   },
//   {
//     path: "/coinDetails/:symbol",
//     element: <DetailView />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* <div>
        element
      </div> */}
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />}/>
          <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <App /> */}

  </React.StrictMode>,
)
