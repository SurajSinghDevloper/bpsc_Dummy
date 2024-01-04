import React from 'react'
import Nav from './LandingPages/Nav'

const Home = () => {
    return (
        <>
            <Nav /> 
            <h1 className="text-3xl font-light bg-red underline">
      Hello world!
    </h1>
    <div className="bg-blue-500  text-white p-4 border border-red-300">
      <h3>This is a component styled with Tailwind CSS!</h3>
    </div>
        </>

    )
}

export default Home