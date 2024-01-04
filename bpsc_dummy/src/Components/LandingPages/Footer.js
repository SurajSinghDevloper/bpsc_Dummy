import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white p-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold mb-2">Your Company</h2>
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Connect with Us</h2>
                    <div className="flex space-x-4">
                        <a href="/" className="text-white hover:text-gray-300">
                            Twitter
                        </a>
                        <a href="/" className="text-white hover:text-gray-300">
                            Facebook
                        </a>
                        <a href="/" className="text-white hover:text-gray-300">
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                    <p>Email: info@yourcompany.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer