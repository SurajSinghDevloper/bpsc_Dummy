import React from 'react';
import logo from '../../Assets/logo.png'
import achLogo from '../../Assets/arch-header.png'
const Nav = () => {
    return (
        <>
            <nav className="bg-white-700 ">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold"><span><img src={logo} alt='' /></span></div>
                    <img src={achLogo} alt='' />
                    <div className="space-x-4">
                        <a href="/" className="text-black hover:text-gray-500">Home</a>
                        <a href="/" className="text-black hover:text-gray-500">About</a>
                        <a href="/" className="text-black hover:text-gray-500">Services</a>
                        <a href="/contact" className="text-black hover:text-gray-500">Contact</a>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Nav;
