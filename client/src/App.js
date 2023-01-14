import React from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from "./components/Signup";
// import Login from "./components/Login";

import "./App.css";
import Login from './components/Login';
import Stock from "./components/Stock";

function App() {
  return(
    <>
    {/* <div>
      <li className="nifty">
        NIFTY 50
      </li>
    </div> */}
  <Router>
  <Routes>
    {/* <Route path="/" element={<Navbar/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} /> */}
    <Route path="/stock" element={<Stock/>} />
    {/* <Route path="/experiences" element={<Experiences />} /> */}
  </Routes>
</Router>
</>
)
}

export default App