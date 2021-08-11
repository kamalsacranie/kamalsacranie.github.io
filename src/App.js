import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Header/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
