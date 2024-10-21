"use client"
import { ContactUsFormApi } from "@/apis/HomepageApi";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = () => {
    const [phoneCode, setPhoneCode] = useState<string | undefined>();
    const [phone, setPhone] = useState<string>("");
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [service, setService] = useState<string>("")
    const [brand, setBrand] = useState<string>("")
    const [text, setText] = useState<string>("")

    const handlePhoneCodeChange = (newValue: string | undefined) => {
        setPhoneCode(newValue);
        console.log("newValue", newValue);
    };

    const cleardata = () => {
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setBrand("");
        setText("");
    }

    const submit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await ContactUsFormApi(name, phone, email, service, brand, text);

            if (response?.message == "sucessfully form submit") {

                toast.success("Form submitted successfully!");
                cleardata()

            } else {

                toast.error("Failed to submit the form. Please try again.");
            }
        } catch (error) {

            console.error("Error submitting the form:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };


    return (
        <div className="cartshadow bg-white rounded-lg max-w-7xl mx-auto px-4 lex mt-10">
            <div className="flex px-6">
                <div className="bg-black text-white flex items-center justify-center px-4 py-8 z-10 w-[80px]">
                    <p className="transform rotate-90 writing-mode-vertical-rl text-xl tracking-wider">CONTACT US</p>
                </div>
                <div className="p-8">
                    <form className="space-y-6" onSubmit={submit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border bg-[#EFEFEF] outline-none text-black rounded-md p-3 w-full h-[80px] placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <div className="flex items-center border rounded-md bg-[#EFEFEF]">
                                <div className="grid grid-cols-12 gap-2 bg-[#EFEFEF] px-5">
                                    <div className="sm:col-span-3 col-span-4 gap-4 w-full p-1 flex justify-center items-center text-center outline-none bg-[#EFEFEF]">
                                        <PhoneInput
                                            international
                                            value={phoneCode}
                                            defaultCountry="IN"
                                            onChange={handlePhoneCodeChange}
                                            placeholder="Country Code"
                                            className=""
                                        />
                                        <p className="text-md font-semibold bg-[#EFEFEF] border-r-[1px] border-[#3d3d3d]">{phoneCode}</p>
                                    </div>
                                    <div className="sm:col-span-9 col-span-8 bg-[#EFEFEF]">
                                        <input
                                            placeholder="Phone no."
                                            type="number"
                                            className="p-4 w-full outline-none bg-[#EFEFEF] placeholder-black"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <input type="email" placeholder="Email" className="border bg-[#EFEFEF] rounded-md p-3 w-full focus:outline-none  placeholder-black" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <select className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black h-[80px]" value={service} onChange={(e) => setService(e.target.value)} required>

                                <option>Service 1</option>
                                <option>Service 2</option>
                            </select>
                            <input type="text" placeholder="Brand Name / Site Name" className="border bg-[#EFEFEF] placeholder-black rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                        </div>
                        <div>
                            <textarea placeholder="What challenges are you looking at?" className="border bg-[#EFEFEF] placeholder-black rounded-md p-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-black" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-black text-white px-10 py-6 flex gap-2 justify-center items-center rounded-md hover:bg-gray-800 focus:outline-none">
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
