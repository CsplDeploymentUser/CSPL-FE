"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
// import { HeaderResponse } from "@/components/ServerSideComponents/HeaderComponents/headerTypes";
import { X, TextQuote } from "lucide-react";
import Link from "next/link";
import HeaderMobile from "./HeaderMobile";
import HeaderSubMenu from "./HeaderSubMenu";
import { throttle } from "lodash";

type Props = {
  MenuData: any;
};
const HeaderMenu = ({ MenuData }: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | undefined>(undefined);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [moveDown, setMoveDown] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      if (window.scrollY > 60) {
        setMoveDown(true);
      } else {
        setMoveDown(false);
      }
    }, 0),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="w-full z-30 fixed">
      <div className="max-w-7xl mx-auto sm:px-8 px-4">
        <div
          className="w-full lg:top-1 top-0 start-0 flex justify-between items-center sm:gap-10 min-h-[65px] max-h-[65px] relative rounded-sm px-3"
          style={{
            ...(moveDown
              ? {
                  background:
                    "linear-gradient(137deg, rgba(255, 255, 255, 0.70) 24.15%, rgba(255, 255, 255, 0.62) 125.95%)",
                  backdropFilter: "blur(50px)",
                  marginTop: "-40px",
                  borderBottom: "1px solid black",
                }
              : { background: "transparent", backdropFilter: "blur(0px)" }),
          }}
        >
          <div className=" lg:w-[20%] w-full flex lg:justify-center justify-between items-center">
            <Link href="/">
              <div className="w-[170px] h-[170px] relative">
                {/* <Image
                  className="sm:rounded-[20%] rounded-[20%]"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${MenuData?.company_details?.logo}`}
                  alt={MenuData?.company_details?.logo_alternate_text}
                  fill={true}
                /> */}
                <img
                  className="w-full h-full object-contain"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${MenuData?.company_details?.logo}`}
                  alt={MenuData?.company_details?.logo_alternate_text}
                />
              </div>
            </Link>
            <div
              className="block lg:hidden"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              {openMobileMenu ? (
                <X
                  className="m-2"
                  style={moveDown ? { color: "#000" } : { color: "#000" }}
                  size={35}
                />
              ) : (
                <TextQuote
                  className="m-2"
                  style={moveDown ? { color: "#000" } : { color: "#000" }}
                  size={40}
                />
              )}
            </div>
            <HeaderMobile
              openMobileMenu={openMobileMenu}
              setOpenMobileMenu={setOpenMobileMenu}
              MenuData={MenuData}
            />
          </div>
          <div className="w-[60%] lg:flex hidden gap-10 justify-center items-center">
            {MenuData?.navbar?.length > 0
              ? MenuData?.navbar?.map((headerMenu: any, index: number) => {
                  return (
                    <>
                      {headerMenu?.is_button === false && (
                        <div
                          className="flex flex-col justify-center items-center relative"
                          key={headerMenu?.id}
                          onMouseLeave={() => {
                            setOpenSubMenu(undefined);
                          }}
                        >
                          {headerMenu?.sub_items?.length > 0 ? (
                            <>
                              <h6
                                className={`flex relative justify-center items-center cursor-default text-lg ${
                                  moveDown
                                    ? "font-semiBold text-primary"
                                    : "font-semiBold text-primary"
                                }`}
                                onMouseEnter={() => {
                                  setOpenSubMenu(headerMenu?.id);
                                }}
                              >
                                {headerMenu?.name}

                                <ChevronDown size={20} />
                              </h6>
                              <HeaderSubMenu
                                openSubMenu={openSubMenu}
                                menuKey={headerMenu?.id}
                                headerMenu={headerMenu}
                                moveDown={moveDown}
                                setOpenSubMenu={setOpenSubMenu}
                              />
                            </>
                          ) : (
                            <Link href={`${headerMenu?.redirect_url}`}>
                              <h6
                                className={`flex relative cursor-pointer text-lg ${
                                  moveDown
                                    ? "font-semiBold text-primary"
                                    : "font-semiBold text-primary"
                                }`}
                              >
                                {headerMenu?.name}
                              </h6>
                            </Link>
                          )}
                        </div>
                      )}
                    </>
                  );
                })
              : null}
          </div>

          {MenuData?.navbar?.find((item: any) => item.is_button === true) && (
            <div className="w-[20%] lg:block hidden">
              <button className="bg-primary py-4 text-white px-12 rounded-md">
                Contact us
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
