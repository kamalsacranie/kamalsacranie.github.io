import { BrowserRouter as Router } from "react-router-dom";
import "./css/main.css";
import Navigation from "./components/Header/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
