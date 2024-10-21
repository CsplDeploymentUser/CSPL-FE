"use client"
import { NewsLatterpi } from "@/apis/HomepageApi";
import { Target } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast/headless";


type Props = {};
const SineupComponent = (props: Props) => {


    const submit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await NewsLatterpi(email);

            if (response?.message == "sucessfully form submit") {

                toast.success("Form submitted successfully!");
                setEmail("")

            } else {

                toast.error("Failed to submit the form. Please try again.");
            }
        } catch (error) {

            console.error("Error submitting the form:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    const [email, setEmail] = useState<string>("")
    console.log("setEmail", setEmail)
    return (
        <div className="relative w-full h-96 bg-cover bg-center px-4 rounded-t-xl" style={{ backgroundImage: "url('/signup.png')" }}>
            {/* <div className="absolute inset-0 bg-black opacity-30 rounded-t-xl"></div> */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="cart rounded-lg p-8 shadow-lg max-w-lg w-full text-center">
                    <h2 className="text-4xl font-semibold mb-4">Sign Up For Updates</h2>
                    <form className="space-y-6" onSubmit={submit}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800" onSubmit={submit}>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>)


}
export default SineupComponent