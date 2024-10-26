// import React from "react";
// import Image from "next/image";
// import { GoArrowUpRight } from "react-icons/go";

// type Props = {
//   banner: any;
// };
// const BannerCard = ({ banner }: Props) => {
//   console.log(banner?.BannerHeading, "Banner card");
//   return (
//     <div className="flex flex-col justify-center items-center w-full sm:rounded-lg rounded-none">
//       <div className="md:h-[550px] h-[650px] w-full sm:rounded-lg rounded-none">
//         {/* <Image
//           className="sm:rounded-lg rounded-none"
//           src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image}`}
//           alt={banner?.image_alternate_text}
//           style={{
//             position: "absolute",
//             objectFit: "cover",
//             inset: 0,
//           }}
//           fill={true}
//         /> */}
//         <img
//           className="sm:rounded-lg rounded-none"
//           src={`${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image}`}
//           alt={banner?.image_alternate_text}
//           style={{
//             position: "absolute",
//             objectFit: "cover",
//             inset: 0,
//           }}
//         />
//       </div>
//       <div className=" w-full h-full flex justify-center items-center bg-tgh-primary/[0.3] sm:rounded-lg rounded-none p-3">
//         <div className="lg:w-[60%] w-full flex flex-col justify-center items-center gap-2">
//           <h1 className="md:text-6xl text-5xl font-400 text-primary text-center capitalize">
//             {banner?.BannerHeading}
//           </h1>
//           <p className="w-full text-primary px-5">{banner?.description}</p>
//         </div>
//       </div>
//       <div className="sm:hidden block fade-bottom"></div>
//     </div>
//   );
// };

// export default BannerCard;

"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import Link from "next/link";

type Props = {
  banner: any;
};

const BannerCard = ({ banner }: Props) => {
  return (
    <div
      className="relative sm:min-h-full min-h-[250px] sm:max-h-[550px] max-h-[250px]"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}${banner?.image})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="sm:min-h-[550px] min-h-[250px] flex items-center justify-center rounded-lg">
        <div className="flex flex-col lg:gap-6 gap-2 mt-5 sm:mt-0 items-center justify-center lg:max-w-2xl mx-auto sm:w-[60%] w-[60%] ">
          {banner?.BannerHeading && (
            <h2 className="text-xl lg:text-5xl font-bold text-primary  text-center">
              {banner?.BannerHeading}
            </h2>
          )}

          {banner?.description && (
            <p className="sm:text-2xl text-base font-normal text-center">
              {banner?.description}
            </p>
          )}
          {banner?.button_link && banner?.button_text && (
            <Link href={banner?.button_link}>
              <button className="lg:text-xl text-lg text-bold border-primary bg-primary hover:bg-primary text-secondary hover:text-secondary rounded-md lg:px-14 px-4 py-2 lg:py-4 flex sm:mx-0 mx-auto mt-2 lg:mt-5 shadow-lg">
                {banner?.button_text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
