import './App.css'
import RecipeTitle from './RecipeTitle'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import "./Components/Navbar.css";
import Home from './Components/Home/Home';
import About from './Components/About/About'; 
import Gallery from './Components/Gallery/Gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </div>
      <h1>Welcome to YummyRecipes 😋</h1>
      <h2>Got no time? This place is for you </h2>
      <h3>YummyRecipes is a place that contains all the recipes you need and you want! <br></br>Recepies from world-wide talent chefs bring their award-winning recepies to you
      <br></br>Simple and seamless recipes for you! Here is our most viewed and rated recepie! 👇</h3>
      <article>
        <RecipeTitle />
      </article>
    </Router>
  )
}

export default App
