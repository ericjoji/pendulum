import './Login.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

function MyForm() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    // setName = event.target.value();
    console.log(isLoggedIn);
    console.log(name);
  }
  return (
    <><form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label for="username">Username<br></br></label>
      <input type="text" placeholder="Email or Phone" id="username"></input>
      <ul></ul>
      <label for="password">Password<br></br></label>
      <input type="password" placeholder="Password" id="password"></input>
      <br></br>
      <Link to="/Login1"><button onClick={handleSubmit}>Login</button>
      </Link>
      <ul></ul>
      <Link to="/Signup"><button>Sign Up</button>
      </Link>
      <ul></ul>
      <span class="psw">Forgot password?</span>
    </form></>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;
