import React, { useState } from 'react'
import Layout from './LandingPages/Layout'
import containerLogo from '../Assets/login-box-bg.jpg'
import loginLogo from '../Assets/login-heading-icon.png'
const Home = (porps) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <img className='w-full' src={containerLogo} alt='Logo' />
        <h2 className='absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl '>
          Welcome to the <br /> <span className='font-bold'>BPSC</span>  Online <br />  Application Portal
        </h2>
        <div className="login-form absolute top-1/4 left-3/4 transform -translate-x-1/4 -translate-y-1/3 bg-blue-500">
          <div className='bg-blue-500 flex items-center'>
            <img src={loginLogo} alt='' className='w-12 mr-2 p-1' />
            <h2 className='text-5xl text-white p-1'>Login</h2>
          </div>
          <div className=' flex justify-center'>
            <hr className='bg-white w-3/4'></hr>
          </div>
          <p className=' text-white'>Provide your User Name and Password to Login</p>

          <form onSubmit={handleSubmit} className='bg-blue-500   '>
            <div className="field-row bg-blue-500 p-2">

              <input
                className='rounded-md p-1'
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="field-row bg-blue-500 mt-2 p-2">

              <input
                className='rounded-md p-1 justify-stretch'
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="field-row  bg-blue-500">
              <button type="submit" className="login-button">
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