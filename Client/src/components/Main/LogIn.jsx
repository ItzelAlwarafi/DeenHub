import { useState, useContext } from 'react';
import userContext from '../../UserContext.jsx';
import axios from 'axios';

export default function LogIn() {
  const { loggedIn, setLoggedIn, setUser } = useContext(userContext);
  const [geolocation, setGeolocation] = useState({ latitude: null, longitude: null });

  const formInitialState = {
    first_name: '',
    last_name: '',
    user_name: '', 
    email: '',
    password: '',
    date_of_birth: '',
    gender: '',
    latitud: '', 
    longitud: '',
  }

  const [formState, setFormState] = useState(formInitialState)
  const[showlogIn,setShowLogIn] = useState(true)
  const [showSignUp, setShowSignUp] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [logInMessage, setLogInMessage] = useState('')
  const [userNameMessage, setUserNameMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(formState.password)

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormState({ ...formState, [id]: value })
  }

  const getUserName = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get('http://localhost:3001/users')
      const user = response.data.find((user) => user.user_name === formState.user_name)
      if (user) {
        setUserNameMessage(<p className='invalid' style={{ color: 'red' }}>Please choose another username !</p>)
      } else {
        setUserNameMessage(<p className='valid' style={{ color: 'green' }}>username</p>)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePassword = () => {
    if (hasSpecialCharacter) {
      console.log('password has special character')
      setPasswordMessage(<p className='valid' style={{ color: 'green' }}>special character</p>)
    } else {
      setPasswordMessage(<p className='invalid' style={{ color: 'red' }}>add special character !</p>)
    }
  };

  const matchPasswords = () => {
    if (formState.password === confirmPassword) {
      setLogInMessage(<p className='valid' style={{ color: 'green' }}>passwords match</p>)
    } else {
      setLogInMessage(<p className='invalid ' style={{ color: 'red' }}>password must match !</p>)
    }
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          setFormState({
            ...formState,
            latitud: position.coords.latitude,
            longitud: position.coords.longitude,
          })
        },
        (error) => {
          console.error('Error getting geolocation:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    getLocation()

    try {
      const formDataJson = {
        ...formState,
        latitud: geolocation.latitude,
        longitud: geolocation.longitude,
      }

      const response = await axios.post('http://localhost:3001/users', formDataJson)
      console.log('Form submitted:', response.data)
      setLogInMessage(<p className='valid' style={{ color: 'green' }}>you have been registered</p>)
      setLoggedIn(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleLogIn = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get('http://localhost:3001/users')
 
    
      const user = response.data.find(user => user.user_name === formState.user_name)
  
      if (user && user.password === formState.password) {
        // console.log('Login successful:', user)
        setLoggedIn(true)
        setLogInMessage(<p className='valid' style={{ color: 'green' }}>  Welcome {user.first_name} </p>)
        setUser(user)


      } else {
        console.log('Invalid username or password')
        setLogInMessage(<p className='invalid' style={{ color: 'red' }}> Invalid username or password</p>)
      }
    } catch (error) {
      console.error('Error logging in:', error)
     
    }
  }

  return (
    <>
  {showlogIn && (
<div className='LogInContainer'>

<img className="logo" src="DeenHubsvg.svg"></img>
<img className="logo1" src="DeenHubl.png"></img>
          <form className="formContainer" onSubmit={handleLogIn}>
           
              <input type='text' id='user_name' placeholder='username'value={formState.user_name} onChange={handleChange} required />
             
              <input type='password' id='password' placeholder=' password'value={formState.password} onChange={handleChange}  required />
            
            <button type="submit">Log In</button>
          </form>

           {logInMessage}
           
            <p>Don't have an account yet? </p>
            <button className='SignUpBtn' onClick={() => { setShowSignUp(true); setShowLogIn(false); }}>Sign Up Here</button>


        </div>
 
  )}
        {showSignUp && (
 
      <div className='Sign-Up-Container'>
      <img className="logo" src="DeenHubsvg.svg"></img>
      <img className="logo2" src="DeenHubl.png"></img>
        <form className="formContainer" onSubmit={handleSubmit}>
          <input type='text' id='user_name' placeholder='Username' value={formState.user_name} onChange={handleChange} onBlur={getUserName} required />
          <input type='text' id='first_name' placeholder='First name' value={formState.first_name} onChange={handleChange} required />
          <input type='text' id='last_name' placeholder='Last name' value={formState.last_name} onChange={handleChange} required />
          <input type='email' id='email' placeholder='Email' value={formState.email} onChange={handleChange} required />
          <input type='password' id='password' placeholder='Password' minLength={7} value={formState.password} onChange={handleChange} onBlur={handlePassword} required />
          <input type='password' placeholder='Confirm password' id='passwordConfirm' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={matchPasswords} required />
          <label> Date Of Birth
            <input type='date' id='date_of_birth' value={formState.date_of_birth} onChange={handleChange} />
          </label>
          <label> Gender 
          <select id='gender' value={formState.gender} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
          </select>
          </label>
          <button type="submit">Sign Up</button>
          <div className='messages'>
            {userNameMessage}
            {logInMessage}
            {passwordMessage}
            <button className='LogInBtn' onClick={() => { setShowSignUp(false); setShowLogIn(true); }}>Log In </button>
          </div>
        </form>
      </div>
     
)}
       
     
    </>
  )
}