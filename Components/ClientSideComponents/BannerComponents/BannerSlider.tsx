"use client";
import React, { useEffect, useRef, useState } from "react";
import SliderFrame from "../CommonComponents/SliderFrame";
import { BannerApi } from "@/apis/HomepageApi";
import BannerCard from "@/Components/ServerSideComponents/BannerComponents/BannerCard";
type Props = {
  banners: any;
};

const BannerSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [infinite, setInfinite] = useState<boolean>(true);
  const [bannerData, setBannerData] = useState<any>([]);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await BannerApi();
        if (response && response.banners) {
          setBannerData(response.banners);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);
  useEffect(() => {
    if (bannerData?.length === 1) {
      setInfinite(false);
    }
  }, [bannerData]);

  const settings = {
    dots: infinite,
    infinite: infinite,
    autoplay: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,

    // prevArrow: <AiOutlineLeft />,
    // nextArrow: <AiOutlineRight />,
  };

  return (
    <>
      {bannerData.length > 0 && (
        <div className="w-full">
          {bannerData?.map((banner: any, index: number) => (
            <section key={index} className="">
              <BannerCard banner={banner} />
            </section>
          ))}
        </div>
      )}
    </>
  );
};

export default BannerSlider;
