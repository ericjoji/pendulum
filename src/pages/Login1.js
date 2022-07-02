import './Login.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";  

function MyForm() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }
  return (
    <><form onSubmit={handleSubmit}>
      <h1>Profile</h1>
      <label for="username">Name<br></br></label>
      <input type="text" placeholder="Full Name" id="username"></input>
      <ul></ul>
      <Link to="/Navbar"><button>Next</button>
      </Link>
    </form></>
);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;