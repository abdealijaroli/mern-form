import { useState } from "react";
import axios from "axios";
import validator from 'validator';

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const registerUser = (e) => {
    e.preventDefault();

    const {name, email} = user;
    if(name && validator.isEmail(email)){
      axios.post("http://localhost:9002/register", user)
      .then(res => alert(res.data.message));
    }
    else{
      alert(`Invalid input(s)`);
    }
  };

  return (
    <div className='container'>
      <h2>Registration Form</h2>
      <form className='form-control'>
        <input type='text' name='name' value={user.name} placeholder='Name' onChange={handleOnChange} />
        <input type='email' name='email' value={user.email} placeholder='Email' onChange={handleOnChange} />
        <button type="submit" className='btn' onClick={registerUser}>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
