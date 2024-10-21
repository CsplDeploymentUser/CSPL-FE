"use client"
import React, { useEffect, useState } from "react";
import { TestimonialsApi } from "@/apis/HomepageApi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Sliders } from "lucide-react";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await TestimonialsApi();
      setTestimonialsData(response?.testimonials || []);
    };
    fetchData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="flex justify-center gap-2">
        <div className="border-b-[1px] w-[100px] h-9 border-black"></div>
        <h2 className="text-4xl font-bold text-center mb-12">
          WHAT OUR CLIENTS SAY
        </h2>
        <div className="border-b-[1px] w-[100px] h-9 border-black"></div>
      </div>
      <Sliders {...sliderSettings} className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((testimonial:any, index:any) => (
          <div
            key={testimonial?.id}
            className={`rounded-lg shadow-lg py-6 px-4 w-[350px] ${testimonial?.backgroundColor}`}
          >
            <div className="flex flex-col items-start">
              <svg
                className="w-12 h-12 text-blue-500 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.07 5.93A7.007 7.007 0 012 12a7.008 7.008 0 007.07 6.07c3.97 0 6.93-3.37 6.93-7.07a7.004 7.004 0 00-7.07-6.07zm0 11.14A5.006 5.006 0 017 7a5.006 5.006 0 010 10zm9.93-11.14A7.008 7.008 0 0118 12a7.008 7.008 0 01-7.07 6.07c-3.97 0-6.93-3.37-6.93-7.07a7.007 7.007 0 017.07-6.07zm0 11.14A5.006 5.006 0 0117 7a5.006 5.006 0 010 10z" />
              </svg>
              <p className="text-black p-4">{testimonial?.quote}</p>
            </div>
            <div className="border-b-[2px] py-2 border-black"></div>
            <div className="flex items-center justify-center py-6">
              <div className="w-[30%]">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.image}`}
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
      </Sliders>
    </section>
  );
};

export default Testimonials;
