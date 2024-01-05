import React, { useState } from 'react'
import Layout from './LandingPages/Layout'
import containerLogo from '../Assets/login-box-bg.jpg'
import loginLogo from '../Assets/login-heading-icon.png'
import refreshLogo from '../Assets/pngegg.png'
import { useHistory } from 'react-router-dom';

const Home = (porps) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRedirect = (destination) => {
    // Redirect to the '/registration' route
    if(destination ==='registration'){
      history.push('/registration');
    }
    
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here using 'username' and 'password'
    console.log('Login Clicked');
  };

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

          <form onSubmit={handleSubmit} className='bg-blue-500 justify-center h-64 '>
            <div className='p-2'>
              <div className="field-row bg-blue-500 p-2">

                <input
                  className='rounded-md p-2 w-full'
                  type="text"
                  placeholder="Username"
                  value={username}
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
              <div className='bg-blue-500 '>
                <div className=' mt-2 p-2  flex justify-between'>
                  <input type='text' className=' p-1 rounded-lg w-32' />
                  <img src={refreshLogo} alt='' className='w-10' />
                  <input type='text' className=' p-1 rounded-lg w-40' />
                </div>
              </div>
            </div>

            <div className=" bg-blue-500 flex justify-between">
              <a href='/' className='text-white p-1 cursor-pointer mt-3'>Forgot Username & Password </a>
              <button type="submit" className="w-4/12 mt-1 p-2 rounded-xl bg-gradient-to-b from-yellow-400 to-orange-500  text-white cursor-pointer">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>


  )
}



export default Home