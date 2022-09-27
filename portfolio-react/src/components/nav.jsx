import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from "./about";
import Projects from "./projects";
import Homepage from "./Home";
import "../style sheets/Navstyle.css"

function NavBar(){
return(
    <div className="App">
      <Router>
      <header>

        <div className="navBar">
          <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/projects">My projects</Link>
            </li>
          </ul>
        </div>

      </header>

     <div className='display'>
        <Routes>
           <Route path="/" element={<Homepage />}/>
           <Route path='/about' element={<About />}/>
           <Route path="/projects" element={<Projects />}/>
        </Routes>
     </div>

      </Router>
    </div>
)
}

export default NavBar;