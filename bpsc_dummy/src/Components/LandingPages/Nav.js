import React from 'react';
import logo from '../../Assets/logo.png'
import achLogo from '../../Assets/arch-header.png'
const Nav = () => {
    return (
        <>
            <nav class="bg-white-700 ">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="text-white text-2xl font-bold"><span><img src={logo} alt='' /></span></div>
                    <img src={achLogo} alt='' />
                    <div class="space-x-4">
                        <a href="/" class="text-black hover:text-gray-500">Home</a>
                        <a href="/" class="text-black hover:text-gray-500">About</a>
                        <a href="/" class="text-black hover:text-gray-500">Services</a>
                        <a href="/" class="text-black hover:text-gray-500">Contact</a>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Nav;
