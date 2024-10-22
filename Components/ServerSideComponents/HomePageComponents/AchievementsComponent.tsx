import { AchivmentsApi } from '@/apis/HomepageApi';
import React from 'react';

const AchievementsSection = async () => {
    const response = await AchivmentsApi();
    if (response?.hasOwnProperty("error")) {
        console.log("error in AchivmentsApi API");
    }
    return (
        <div className="py-8 w-full mx-auto max-w-7xl">
            <div className="flex justify-center items-center py-5">
                <div className="border-t-[1px] w-[100px] border-black"></div>
                <h2 className="text-4xl font-bold text-center mx-4 uppercase">Achivments</h2>
                <div className="border-t-[1px] w-[100px] border-black"></div>
            </div>

            <div className="grid grid-cols-12 w-full gap-6 justify-center items-center text-center">
                {response?.achivments?.map((data: any, index: any) => (
                    <div
                        className={`flex flex-col justify-center items-center text-black text-4xl font-semibold col-span-6 md:col-span-3 relative ${index < response?.achivments.length - 1 ? 'border-r border-gray-600' : ''
                            }`}
                        key={index}
                    >
                        <span className="text-7xl">{data?.number}+</span>
                        <p className="text-xl  mt-2 font-normal">{data?.heading}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
