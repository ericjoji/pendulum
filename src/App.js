import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Next from "./pages/Login1";
import Navbar from "./pages/Navbar";
import Wall from "./pages/Wall";
import List from "./pages/List";
import Particles from "./pages/Particles";


 function App(){
  return(
    <><BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login1" element={<Next />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/wall" element={<Wall />} />
          <Route exact path="/list" element={<List />} /> 
          <Route exact path="/particles" element={<Particles />} />
        </Route>
      </Routes>
    </BrowserRouter></>
  );
}
export default App;
