import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import About from "./components/About/About";

import Skill from "./components/Skill/Skill";

import Contact from "./components/Contact/Contact"



import data from "./data";

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Skill data={data}/>
    <Contact/>
    </div>
  );
}

export default App;
