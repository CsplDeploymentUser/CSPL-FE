"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = { StripeData: any };

const HeaderTopStripe = ({ StripeData }: Props) => {
  const ContactLinks = StripeData?.company_details;
  return (
    <div className="bg-black  min-h-[40px] max-h-[40px] ">
      <div className="max-w-7xl text-white grid md:grid-cols-3 grid-cols-2 mx-auto px-2">
        {ContactLinks?.phone && (
          <div className="flex gap-2 justify-center items-center py-2">
            <div className="w-5 h-5 relative">
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${ContactLinks?.phone_icon}`}
                fill
                alt={ContactLinks?.phone_icon_alternate_text}
                className="object-contain "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              /> */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${ContactLinks?.phone_icon}`}
                alt={ContactLinks?.phone_icon_alternate_text}
                className="object-contain "
              />
            </div>
            <p className="text-sm md:text-lg">{ContactLinks?.phone}</p>
          </div>
        )}
        {ContactLinks?.email && (
          <div className="flex gap-2 justify-center py-2">
            <div className="w-5 h-5 relative">
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${ContactLinks?.email_icon}`}
                fill
                alt={ContactLinks?.phone_icon_alternate_text}
                className="object-contain "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              /> */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${ContactLinks?.email_icon}`}
                alt={ContactLinks?.email_icon_alternate_text}
                className="object-contain "
              />
            </div>
            <p className="text-sm md:text-lg">{ContactLinks?.email}</p>
          </div>
        )}

        <div className="md:flex space-x-6 justify-center py-2 hidden">
          {StripeData?.social_media.map((social: any, index: number) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
              aria-label={social.name}
            >
              <div className="w-6 h-6 relative ">
                {/* <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${social?.icon}`}
                    alt={`${social.name} Icon`}
                    width={30}
                    height={30}
                    className="object-contain"
                  /> */}
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${social?.icon}`}
                  alt={social?.icon_alternate_text}
                  className="object-contain invert "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderTopStripe;
