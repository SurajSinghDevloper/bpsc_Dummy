import React, { useState, useEffect } from 'react'
import Layout from './LandingPages/Layout'
import containerLogo from '../Assets/login-box-bg.jpg'
import loginLogo from '../Assets/login-heading-icon.png'
import refreshLogo from '../Assets/pngegg.png'
import { useHistory } from 'react-router-dom';
import { login } from "../Actions/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import TextToImage from '../Configuration/TextToImage'
import '../CustomStyle.css'

const Home = (porps) => {
  const history = useHistory();
  const [emailID, setemailID] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // captcha 
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [rotation] = useState(0);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(text);
  };

  // Validate user input on each change
  useEffect(() => {
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [userInput, captchaText]);



  const handleRedirect = (destination) => {
    // Redirect to the '/registration' route
    if (destination === 'registration') {
      history.push('/registration');
    }

  };
  const handleAuth = () => {
    if (auth.authenticate === true) {
      return <Redirect to="/dashboard" />;
    } else {
      return null; // Return null if no redirection is required
    }
  };

  const handleUsernameChange = (e) => {
    setemailID(e.target.value);
  };

  const handleCaptchaChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { emailID, password };

    try {
      if (isValid) {
        alert('Captcha is validated!');
        if (emailID !== "" || password !== "") {
          await dispatch(login(user));
        }
      } else {
        // Alert("All Fields Are Important");

        alert('Invalid Captcha! Please try again.');
        generateCaptcha();
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // onClose();
    // Implement your login logic here using 'username' and 'password'
    console.log('Login Clicked');
  };
  useEffect(() => {
    generateCaptcha();
  }, []);
  return (

    <Layout>
      <div className='relative'>
        <img className='w-full  px-1 ' src={containerLogo} alt='Logo' />
        <h2 className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl '>
          Welcome to the <br /> <span className='font-bold'>BPSC</span>  Online <br />  Application Portal
        </h2>
        <button onClick={() => handleRedirect('registration')} className='absolute top-3/4 w-2/6 
        left-1/3 transform -translate-x-1/2 -translate-y-1/2  
        rounded-xl bg-gradient-to-b from-yellow-400 to-orange-500 
         text-white cursor-pointer p-3'>ONLINE REGISTRATION</button>
        <div className="login-form absolute top-1/3 left-3/4 transform -translate-x-1/4 -translate-y-1/3 bg-blue-500  p-5">
          <div className='bg-blue-500 flex items-center'>
            <img src={loginLogo} alt='' className='w-12 mr-2 ml-5 p-1' />
            <h2 className='text-5xl text-white p-1'>Login</h2>
          </div>
          <div className=' flex justify-center'>
            <hr className='bg-white w-11/12'></hr>
          </div>
          <p className=' text-white font-light text-base'>Provide your User Name and Password to Login</p>

          <form className='bg-blue-500 justify-center h-64 '>
            <div className='p-2'>
              <div className="field-row bg-blue-500 p-2">

                <input
                  className='rounded-md p-2 w-full'
                  type="text"
                  placeholder="Username"
                  value={emailID}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className=" bg-blue-500 mt-2 p-2">
                <input
                  className='rounded-md p-2 w-full'
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              {/* Captcha */}
              <div className='bg-blue-500 '>
                <div className=' mt-2 p-2  flex justify-between'>
                  <div className="captchatext select-none">
                    <TextToImage text={captchaText} style={{ backgroundColor: 'white', fontWeight: '500px' }} />
                    <div className="absolute inset-x-0 inset-y-5 bottom-0 h-[2px] bg-slate-500 transform rotate-6"></div>
                  </div>

                  <img src={refreshLogo} onClick={generateCaptcha} alt='' className={`w-10 transition-transform transform ${rotation !== 0 ? 'rotate-' + rotation : ''}`} />
                  <input type='text' id="captcha"
                    value={userInput}
                    onChange={handleCaptchaChange}
                    placeholder="Enter captcha" className=' p-1 rounded-lg w-40' />

                </div>

              </div>
            </div>

            <div className=" bg-blue-500 flex justify-between">
              <a href='/' className='text-white p-1 cursor-pointer mt-3'>Forgot Username & Password </a>
              <button onClick={handleSubmit} className="w-4/12 mt-1 p-2 rounded-xl bg-gradient-to-b from-yellow-400 to-orange-500  text-white cursor-pointer">
                Log In
              </button>
            </div>
          </form>
          {handleAuth()}
        </div>
      </div>
    </Layout>


  )
}



export default Home