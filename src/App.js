import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/header/Navigation";
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from "./screens/AboutScreen";
import ResumeScreen from "./screens/ResumeScreen";

function App() {
  return (
    <Router>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='/about' component={AboutScreen}/>
      <Route path='/cv' component={ResumeScreen}/>
      <Route path='/contact' component={AboutScreen}/>
      {/* Looks linke we are going to render our navigation last because of z-indexing */}
      <Footer />
      <Navigation />
    </Router>
  );
}

export default App;
