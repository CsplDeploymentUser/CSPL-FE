import React from "react";
import { OurTechnologyApi } from "@/apis/HomepageApi";
import TechnologiesOrbitingCircles from "./TechnologiesOrbitingCircles";

type Props = {};

const TechnologiesStackComponent = async (props: Props) => {
  const response = await OurTechnologyApi();
  return (
    <>
      {/* {response.result === true && ( */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 py-8 justify-center items-center lg:px-0 px-4">
          {response?.heading?.title && (
            <h2 className="text-3xl font-bold text-center uppercase lg:hidden block">
              {response?.heading?.title}
            </h2>
          )}
          <TechnologiesOrbitingCircles
            ImagesContent={response?.ourtechnology}
          />
          <div className="space-y-6 ">
            {response?.heading?.title && (
              <div className="lg:flex justify-start items-end hidden">
                <h2 className="text-4xl font-bold text-center uppercase">
                  {response?.heading?.title}
                </h2>
                <div className="border-t-[1px] w-[110px] border-black"></div>
              </div>
            )}

            {response?.heading?.description && (
              <p className="lg:text-left text-center text-xl font-normal text-gray-900">
                {response?.heading?.description}
              </p>
            )}
          </div>
        </div>
      </section>
      {/* )} */}
    </>
  );
};

export default TechnologiesStackComponent;
