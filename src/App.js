import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Header/Navigation";
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>
      <Route path='/' component={HomeScreen}/>
      {/* Looks linke we are going to render our navigation last because of z-indexing */}
      <Navigation />
    </Router>
  );
}

export default App;
