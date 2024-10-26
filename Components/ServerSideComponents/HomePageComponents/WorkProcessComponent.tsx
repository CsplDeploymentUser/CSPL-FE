// components/WorkProcess.js
import { WorkProcesApi } from "@/apis/HomepageApi";
import Image from "next/image";

const WorkProcess = async () => {
  const response = await WorkProcesApi();

  return (
    <>
      {response?.result === true && (
        <div className="max-w-7xl mx-auto py-12 lg:px-0 px-4 text-center">
          <div className="flex justify-center items-end gap-2 mb-12">
            <div className="border-b-[1px] w-[100px] border-black lg:block hidden"></div>
            <h2 className="lg:text-4xl text-3xl font-bold text-center">
              {response?.heading?.title}
            </h2>
            <div className="border-b-[1px] w-[100px] border-black lg:block hidden"></div>
          </div>

          <div className="w-full grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-6 justify-between items-center ">
            {response?.workprocess.map((step: any, index: number) => (
              <div key={step.number} className="relative text-center">
                <div className="rounded-full overflow-hidden border-2 border-gray-900 w-56 h-56 mx-auto mb-4 p-2">
                  {/* <Image
                    src={step.imgSrc}
                    alt={step.Heading}
                    width={160}
                    height={160}
                    className="object-cover"
                  /> */}

                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${step?.image}`}
                    alt={step.Heading}
                    width={160}
                    height={160}
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
                <div className="absolute top-[50%] left-[70%] bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-semibold">
                  {step.number < 10 ? `0${step.number}` : step.number}
                </div>
                <p className="lg:text-2xl text-xl font-medium ">
                  {step.Heading}
                </p>

                {index < response?.workprocess.length - 1 && (
                  <div className="hidden md:block absolute top-[40%] right-[-30px] transform translate-y-[-50%]">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkProcess;
