import './App.css';
import Bottle from "./Components/Bottle/bottle.jsx"
import Showcase from "./Components/Showcase/showcase.jsx"
import PlayStationStats from "./Components/PlayStationStats/PlayStationStats.jsx"

function App() {
  return (
    <div className="App">
      <Showcase />      
      <Bottle />
      <PlayStationStats />
     

    </div>
  );
}

export default App;
