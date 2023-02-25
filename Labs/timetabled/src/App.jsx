import './App.css';
import Calendar from "./components/Calendar.jsx"

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Chicago 🏙</h1>
      <h2>Welcome to Chicago, Bao! Check out this calendar to get to know the city and see all the sights during the stay.</h2>
      
      <Calendar />

    </div>
  )
}

export default App