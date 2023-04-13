import './App.css'
import { useRoutes, Link } from "react-router-dom"
import Create from "./router/Create"
import Edit from "./router/Edit"
import About from "./router/About"
import Home from "./router/Home"

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create",
      element: <Create />
    },
    {
      path: "/edit/:id",
      element: <Edit />
    },
    {
      path: "/about/:id",
      element: <About />
    }
  ])

  return (
    <div className="App">
      <div className="header">
        <h1>Crewmate</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/create">
          <button>Create</button>
        </Link>
        {route}
      </div>
    </div>
  )
}

export default App
