"use client";
import SliderFrame from "@/Components/ClientSideComponents/CommonComponents/SliderFrame";
import React, { useRef } from "react";
import Slider from "react-slick";


const TestimonialsComponent: React.FC<{ response: any }> = ({ response }) => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sm:w-[650px] lg:w-[1300px] w-[400px]">
      <SliderFrame settings={sliderSettings} selector={sliderRef}>
        {response?.testimonials?.map((testimonial: any, index: number) => (
          <div key={index} className="flex p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="py-5">
                <img
                  src="/test.png"
                  alt={testimonial?.name}
                  className="w-[100px] h-[80px] object-contain mr-4"
                />
              </div>
              <p className="text-black mb-4">{testimonial?.description}</p>
              <div className="border-b-[2px] py-2 border-black"></div>
              <div className="flex items-center pt-6">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${testimonial?.image}`}
                  alt={testimonial?.name}
                  className="w-[80px] h-[80px] rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial?.name}</h3>
                  <div>
                    <p className="text-sm">{testimonial?.position}</p>
                    <p className="text-sm">{testimonial?.company_name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SliderFrame>
    </div>
  );
};

export default TestimonialsComponent;
