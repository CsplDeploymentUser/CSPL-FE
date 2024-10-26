// components/AchievementsSection.tsx (client component)
"use client";
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

type AchievementsSectionProps = {
    response: any;
};

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ response }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after animation starts
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="py-6 w-full mx-auto max-w-7xl">
            <div className="flex justify-center items-center py-5">
                <div className="border-t-[1px] w-[100px] border-black"></div>
                <h2 className="text-4xl font-bold text-center mx-4 uppercase">Achievements</h2>
                <div className="border-t-[1px] w-[100px] border-black"></div>
            </div>

            <div className="grid grid-cols-12 w-full gap-6 justify-center items-center text-center">
                {response?.achivments?.map((data: any, index: any) => (
                    <div
                        className={`flex flex-col justify-center items-center text-7xl text-black font-semibold col-span-6 md:col-span-3 relative ${index < response?.achivments.length - 1 ? 'border-r border-gray-600' : ''
                            }`}
                        key={index}
                    >
                        <div className="flex">
                            {isVisible ? (
                                <CountUp end={data?.number} duration={3} separator="," />
                            ) : (
                                <span>0</span> // Display 0 when not yet in view
                            )}
                            <p>+</p>
                        </div>
                        <p className="text-xl mt-2 font-normal">{data?.heading}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
