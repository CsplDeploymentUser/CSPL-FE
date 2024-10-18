import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
const testimonials = [
  {
    id: 1,
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
    image: "signup.png", // Update with the actual image path
    backgroundColor: "bg-white", // Custom background color for each card
  },
  {
    id: 2,
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
    image: "/signup.png",
    backgroundColor: "bg-gray-100",
  },
  {
    id: 3,
    quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    position: "Head of Talent Acquisition, North America",
    image: "/signup.png",
    backgroundColor: "bg-gray-200",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex justify-center gap-2">
      <div className="border-b-[1px] w-[100px] h-9 border-black"></div>
      <h2 className="text-4xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY</h2>
      <div className="border-b-[1px] w-[100px] h-9 border-black"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial?.id}
            className={`rounded-lg shadow-lg py-6 px-4 w-[400px] ${testimonial?.backgroundColor}`}
          >
            <div className="flex flex-col items-start">
              
              <svg
                className="w-12 h-12 text-blue-500 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.07 5.93A7.007 7.007 0 012 12a7.008 7.008 0 007.07 6.07c3.97 0 6.93-3.37 6.93-7.07a7.004 7.004 0 00-7.07-6.07zm0 11.14A5.006 5.006 0 017 7a5.006 5.006 0 010 10zm9.93-11.14A7.008 7.008 0 0118 12a7.008 7.008 0 01-7.07 6.07c-3.97 0-6.93-3.37-6.93-7.07a7.007 7.007 0 017.07-6.07zm0 11.14A5.006 5.006 0 0117 7a5.006 5.006 0 010 10z"/>
              </svg>
            
              <p className="text-black p-4">{testimonial?.quote}</p>
            </div>
           <div className="border-b-[2px] py-2 border-black"></div>
            <div className="flex items-center justify-center py-6">
              <div className="w-[30%] ">
                <img
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-[80px] h-[80px] rounded-full"
                />
              </div>
              <div className="w-[70%]">
                <h3 className="text-xl font-semibold py-3">{testimonial?.name}</h3>
                <p className="text-sm">{testimonial?.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
