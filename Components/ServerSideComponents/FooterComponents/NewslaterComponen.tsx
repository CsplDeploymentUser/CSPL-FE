"use client";
// import { newsletter } from "@/apis/HomePageApis";
import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const submitNewsLetterForm = async (e: any) => {

  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-black text-white rounded-lg shadow-lg">
      <form className="space-y-3" onSubmit={submitNewsLetterForm}>
        <input
          placeholder="Name"
          className="w-full h-12 px-4 rounded-md bg-white text-black placeholder-gray-600"
          type="text"
          required
        />
        <input
          placeholder="Email"
          className="w-full h-12 px-4 rounded-md bg-white text-black placeholder-gray-600"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full h-12 rounded-md bg-white text-black font-semibold hover:bg-gray-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
