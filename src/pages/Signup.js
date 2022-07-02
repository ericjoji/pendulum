import './Signup.css';
import ReactDOM from "react-dom/client";
import React from 'react';
import { Link } from "react-router-dom";   

function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
   <> <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label for="username">Username<br></br></label>
      <input type="text" placeholder="Email or Phone" id="username"></input>
      <ul></ul>
      <label for="password">Password<br></br></label>
      <input type="password" placeholder="Password" id="password"></input>
      <br></br>
      <label for="password">Confirm Password<br></br></label>
      <input type="password" placeholder="Password" id="password"></input>
      <Link to="/Login1"><button>Login</button>
      </Link>
    </form></>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm;