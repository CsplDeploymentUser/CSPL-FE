import { Image } from "lucide-react";
import React from "react";
import Newsletter from "./NewslaterComponen";
import SineupComponent from "./SineUpComponent";

type Props = {};

const footerResponse = {
  result: {
    logo: "/images/logo.png",
    logo_alternate_text: "Consociate Solutions Logo",
    title: "Consociate Solutions",
    description:
      "We at Consociate Solutions build software to meet the specific needs of our business partners that can accelerate their efficiency and performance. Our focus has always been in adding value to our business partners and making them future-ready.",
    footers: [
      {
        title: "Website Links",
        sub_footers: [
          { title: "Home", redirect_to: "/home" },
          { title: "About", redirect_to: "/about" },
          { title: "Get in touch", redirect_to: "/contact" },
          { title: "FAQs", redirect_to: "/faqs" },
        ],
      },
      {
        title: "Services",
        sub_footers: [
          { title: "Website Designing", redirect_to: "/services/website-designing" },
          { title: "Website Development", redirect_to: "/services/website-development" },
          { title: "SEO Services", redirect_to: "/services/seo" },
          { title: "Application Design & Development", redirect_to: "/services/application-development" },
        ],
      },
    ],
    address: { street_1: "123 Main Street, City, Country" },
    address_url: "https://maps.google.com/?q=123+Main+Street",
    phone_number: "+1234567890",
    email_id: "sales@consociatesolutions.com",
    social_media: [
      { link: "https://facebook.com/ConsociateSolutions", icon: "/icons/facebook.png", icon_alternate_text: "Facebook" },
      { link: "https://instagram.com/ConsociateSolutions", icon: "/icons/instagram.png", icon_alternate_text: "Instagram" },
      { link: "https://linkedin.com/company/ConsociateSolutions", icon: "/icons/linkedin.png", icon_alternate_text: "LinkedIn" },
    ],
    footer_links: [
      { title: "Terms & Conditions", redirect_to: "/terms-and-conditions" },
      { title: "Refund Policy", redirect_to: "/refund-policy" },
      { title: "Cancellation Policy", redirect_to: "/cancellation-policy" },
    ],
  },
};

const Footer = (props: Props) => {
  return (
    <div className="">

      <SineupComponent/>

      <div className="bg-gray-100">
        <div className="w-full">
          <div className="grid grid-cols-12 gap-6 px-4">
            <div className="col-span-12 lg:col-span-4 flex flex-col items-start">
              <div className="w-[100px] h-[70px] relative mb-4">
                <img
                  src={footerResponse?.result?.logo}
                  alt={footerResponse?.result?.logo_alternate_text}
                  className="rounded-full"
                  
                />
              </div>
              <h5 className="font-bold">{footerResponse?.result?.title}</h5>
              <p className="text-sm text-gray-600 mt-2">
                {footerResponse.result.description}
              </p>
              <div className="flex space-x-4 mt-4">
                {footerResponse?.result?.social_media?.map((social, index) => (
                  <a key={index} href={social.link} className="text-black">
                    <img
                      src={social?.icon}
                      alt={social.icon_alternate_text}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>

            {footerResponse.result.footers.map((footer, index) => (
              <div key={index} className="col-span-6 lg:col-span-2 flex flex-col mx-auto py-8 ">
                <h5 className="font-bold text-lg">{footer.title}</h5>
                {footer?.sub_footers?.map((sub, subIndex) => (
                  <a key={subIndex} href={sub.redirect_to} className="text-gray-600 mt-2 py-2">
                    {sub?.title}
                  </a>
                ))}
              </div>
            ))}

            <div className="col-span-12 lg:col-span-4 flex flex-col p-7">
              <h5 className="font-bold text-lg mb-1">Get Our Newslatter</h5>
              <Newsletter />
            </div>
          </div>

          <div className="w-full flex justify-between items-center mt-6 pt-4 border-t border-gray-300 bg-black h-12">
            <p className="text-white mx-4">Sale@ConsociateSolutions.com</p>
            <p> {footerResponse?.result?.footer_links?.map((link, index) => (
              <a key={index} href={link?.redirect_to} className="text-white px-5">
                {link?.title}
              </a>
            ))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
