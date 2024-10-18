import React from "react"
type Props = {};
const SineupComponent = (props: Props) => {
    return (
    <div className="relative w-full h-96 bg-cover bg-center px-4 rounded-t-xl" style={{ backgroundImage: "url('/signup.png')" }}>
        {/* <div className="absolute inset-0 bg-black opacity-30 rounded-t-xl"></div> */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="cart rounded-lg p-8 shadow-lg max-w-lg w-full text-center">
                <h2 className="text-3xl font-semibold mb-4">Sign Up For Updates</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Subscribe</button>
            </div>
        </div>
    </div>)


}
export default SineupComponent