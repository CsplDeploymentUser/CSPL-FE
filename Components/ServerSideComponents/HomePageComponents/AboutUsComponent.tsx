import { AboutUsApi } from "@/apis/HomepageApi";
import Image from "next/image";
import Link from "next/link";

const AboutUsComponent = async () => {
  const response = await AboutUsApi();
  return (
    <section className="relative container mx-auto lg:py-8">
      {/* <div className="absolute ">
          <Image
            src="/icon-lines-6.81833a8f.png"
            alt="Heading Image"
            width={500}
            height={500}
            className=" "
          />
        </div> */}

      <div className="absolute top-[10vh] left-[2vw] md:top-[8vh] md:left-[1vw] lg:top-[10vh] lg:left-[2vw]">
        <img
          src="/BACKGROUND.png"
          alt="Heading Image"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="absolute right-[10%] top-[30%] hidden md:block">
        <img
          src="/BACKGROUND.png"
          alt="Heading Image"
          width={300}
          height={300}
          className="object-contain opacity-    10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid ld:grid-cols-2 grid-cols-1 gap-4">
            {response?.abouts?.image_1 && (
              <div className="col-span-2">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${response?.abouts?.image_1}`}
                  alt="Person smiling"
                  className="rounded-lg w-full h-auto object-cover"
                  width={500}
                  height={400}
                />
              </div>
            )}
            {response?.abouts?.counter_number && (
              <div className="absolute lg:top-[80%] top-[33%] lg:left-[8%] left-[18%] text-center">
                <h3 className=" text-5xl md:text-8xl font-bold">
                  {response?.abouts?.counter_number}+
                </h3>
                {response?.abouts?.counter_heading && (
                  <p className="text-2xl md:text-3xl text-black">
                    {response?.abouts?.counter_heading}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 lg:justify-start justify-center lg:items-start items-center lg:mt-0 mt-8">
            {response?.heading?.title && (
              <div className="flex md:justify-start justify-center items-end ">
                <h2 className="text-4xl font-bold text-center uppercase">
                  {response?.heading?.title}
                </h2>
                <div className="border-t-[1px] w-[120px] border-black hidden md:block"></div>
              </div>
            )}

            {response?.heading?.description && (
              <p className="text-2xl font-semibold text-gray-800 lg:text-left text-center">
                {response?.heading?.description}
              </p>
            )}
            {response?.abouts?.description && (
              <p className="text-gray-800 text-lg lg:text-left text-justify">
                {response?.abouts?.description}
              </p>
            )}

            {response?.abouts?.button_text && response?.abouts?.button_link && (
              <Link href={response?.abouts?.button_link} className="">
                <button className="inline-block bg-black text-white mt-4 py-3 px-6 rounded-lg hover:bg-gray-800 transition-all">
                  {response?.abouts?.button_text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
