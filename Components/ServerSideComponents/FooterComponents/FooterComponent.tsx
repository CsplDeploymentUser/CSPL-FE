
import React from "react";
import Newsletter from "./NewslaterComponen";
import SineupComponent from "./SineUpComponent";
import { Image } from "lucide-react";

type Props = {
  response: any;
};


const footer_links = [
  { title: "Terms & Conditions", redirect_to: "/terms-and-conditions" },
  { title: "Refund Policy", redirect_to: "/refund-policy" },
  { title: "Cancellation Policy", redirect_to: "/cancellation-policy" },
]



const Footer: React.FC<Props> = ({ response }) => {
  console.log("response", response?.social_media)
  return (
    <section className="flex flex-col justify-center items-center mx-auto">
      <SineupComponent />
      <div className="bg-gray-100">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center gap-6 px-4">
            <div className="flex flex-col items-center  ">
              <div className="w-[270px] mt-2">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${response?.company_details?.logo}`}
                  alt={response?.company_details?.logo_alternate_text}
                  className="mx-auto"
                />
              </div>
              <h5 className="font-bold text-xl mt-2">{response?.company_details?.name}</h5>
              <p className="text-xl mt-2 md:px-60">
                {response?.company_details?.description}
              </p>
              <div className="flex space-x-4 mt-4">
                {response?.social_media?.map((social: any, index: any) => (
                  <a key={index} href={social?.link}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${social?.icon}`}
                      alt={social?.icon_alternate_text}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
              <p className="text-lg mt-4">
                Sacred World, Office #: 707, South Block, Wanwadi, Pune, Maharashtra
              </p>
            </div>
          </div>
          <div className="w-full flex  md:flex-row flex-col justify-between items-center mt-6 pt-4 border-t border-gray-300 bg-black md:h-[80px]">
            <p className="text-white mx-4">Sale@ConsociateSolutions.com</p>

            <p className="flex flex-col md:flex-row justify-center items-center py-2"> {footer_links?.map((link, index) => (
              <a key={index} href={link?.redirect_to} className="text-white px-5 py-2">
                {link?.title}
              </a>
            ))}</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
