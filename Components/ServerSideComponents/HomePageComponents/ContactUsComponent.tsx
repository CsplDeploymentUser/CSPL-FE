import React from "react"
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className="cartshadow bg-white rounded-lg max-w-7xl mx-auto px-4 lex mt-10">

            <div className="flex px-6">
            <div className="bg-white text-white flex items-center justify-center px-4 py-8 z-10 ">
                 
                </div>
                <div className="bg-black text-white flex items-center justify-center px-4 py-8 z-10 w-[80px]">
                    <p className="transform rotate-90 writing-mode-vertical-rl text-xl tracking-wider">CONTACT US</p>
                </div>
                <div className="p-8">
                    <form action="#" className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <input type="text" placeholder="Full Name" className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black" />
                            <div className="flex items-center border rounded-md">
                                <span className="bg-gray-100 p-3 border-r">🇮🇳 +91</span>
                                <input type="text" placeholder="Phone no." className="p-3 w-full focus:outline-none" />
                            </div>
                            <input type="email" placeholder="Email" className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <select className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black">
                                <option>Services</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                            </select>
                            <input type="text" placeholder="Brand Name / Site Name" className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>

                        <div>
                            <textarea placeholder="What challenges are you looking at ?" className="border rounded-md p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-black  text-white px-10 py-6 flex gap-2 justify-center items-center rounded-md hover:bg-gray-800 focus:outline-none">
                                <p>All Categories</p> <FaArrowRight />

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
