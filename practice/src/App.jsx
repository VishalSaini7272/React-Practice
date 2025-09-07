import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";

import './App.css'

function App() {

  return (
    <>
     {/* <h1>practice</h1> */}


    <Router>
      <Routes>

        {/* <Route path="/navbar" element={<Navbar />}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>

   </>
  )
}

export default App
