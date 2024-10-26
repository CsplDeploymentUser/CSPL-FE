"use client"
import { Image } from "lucide-react";
import React, { useState } from "react";
import Marquee from "react-marquee-slider";
type props = {
    response: any;
}
const SelectiveClientsCart: React.FC<props> = ({ response }) => {
    const [isHovered, setIsHovered] = useState(false);
    const partnerLength = response?.ourpartners?.length;
    return (
        <div className="flex flex-wrap justify-center gap-6" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <Marquee
                direction={"rtl"}
                velocity={isHovered ? 0 : 25}
                scatterRandomly={false}
                resetAfterTries={100}
                onInit={() => { }}
                onFinish={() => { }}
            >
                {response?.ourpartners?.slice(0, partnerLength / 2)?.map((logo: any, index: any) => (
                    <div className="py-2 px-2">
                        <div className="md:w-[380px] w-[200px] flex justify-center items-center md:border-none border bg-white rounded-xl p-4 bg-transparent">
                            <div className="h-[130px] w-full relative">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo?.image}`}
                                    alt={logo?.image_alternate_text}
                                     className="h-full w-full md:object-cover object-contain"

                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
            <Marquee
                direction={"ltr"}
                velocity={isHovered ? 0 : 25}
                scatterRandomly={false}
                resetAfterTries={100}
                onInit={() => { }}
                onFinish={() => { }}
            >
                {response?.ourpartners?.slice(partnerLength / 2,partnerLength)?.map((logo: any, index: any) => (
                    <div className="py-2 px-2">
                        <div className="md:w-[380px] w-[200px] flex justify-center items-center md:border-none border bg-white rounded-xl p-4 bg-transparent">
                            <div className="h-[130px] w-full relative">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${logo?.image}`}
                                    alt={logo?.image_alternate_text}
                                    className="h-full w-full md:object-cover object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>

    );
};

export default SelectiveClientsCart;
