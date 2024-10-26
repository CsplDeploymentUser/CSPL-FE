"use client";
import React, { useState } from "react";
import { CircleX } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import HeaderSubMenuMobile from "./HeaderSubMenuMobile";

type Props = {
  openMobileMenu: boolean;
  setOpenMobileMenu: any;
  MenuData: any;
};

const HeaderMobile = ({
  openMobileMenu,
  setOpenMobileMenu,
  MenuData,
}: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState<number | undefined>(undefined);

  const router = useRouter();

  const mobileHeaderNavigation = (route: string) => {
    router.push(route);
    setOpenMobileMenu(false);
  };

  return (
    <div
      className={`${
        openMobileMenu ? "block" : "hidden"
      } open absolute top-full mt-2 start-0 lg:hidden w-full h-auto max-h-[70vh] overflow-y-auto z-50 rounded-xl py-4 `}
      style={{
        background: `linear-gradient(137deg, rgba(255, 255, 255, 0.95) 24.15%, rgba(255, 255, 255, 0.87) 125.95%)`,
        backdropFilter: "blur(35px)",
      }}
    >
      <div className="w-full ">
        {MenuData?.navbar?.map((headerMenu: any, index: number) => {
          return (
            <>
              {headerMenu?.sub_items?.length > 0 ? (
                <div
                  className="w-full px-4 py-3 flex flex-col justify-center items-center text-xl mt-2 "
                  key={index}
                  onClick={() => {
                    if (openSubMenu === index) {
                      setOpenSubMenu(undefined);
                    } else {
                      setOpenSubMenu(index);
                    }
                  }}
                >
                  <div className="w-full flex justify-between items-center py-1 text-2xl ">
                    <h5 className="hover:underline underline-offset-4">
                      {headerMenu?.title}
                    </h5>
                    <MdOutlineKeyboardArrowDown className="mt-1 " size={25} />
                  </div>
                  <div className="w-full ">
                    <HeaderSubMenuMobile
                      openSubMenu={openSubMenu}
                      menuKey={index}
                      headerMenu={headerMenu}
                      setOpenSubMenu={setOpenSubMenu}
                      setOpenMobileMenu={setOpenMobileMenu}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="w-full px-4 py-3 flex flex-col justify-center items-center text-xl mt-2"
                  key={index}
                  onClick={() => setOpenMobileMenu(!openMobileMenu)}
                >
                  <Link className="w-full" href={headerMenu?.redirect_url}>
                    <div className="w-full flex justify-between items-center py-1 text-2xl hover:underline underline-offset-4">
                      <h5>{headerMenu?.name}</h5>
                    </div>
                  </Link>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderMobile;
