import Link from "next/link";
import React from "react";

type Props = {
  openSubMenu: number | undefined;
  menuKey: number;
  headerMenu: any;
  setOpenSubMenu: any;
  setOpenMobileMenu: any;
};

const HeaderSubMenuMobile = ({
  openSubMenu,
  menuKey,
  headerMenu,
  setOpenSubMenu,
  setOpenMobileMenu,
}: Props) => {
  // console.log(openSubMenu, menuKey);
  return (
    <div
      className={`${
        openSubMenu === menuKey ? "block" : "hidden"
      } open w-full p-2 rounded-xl`}
    >
      {headerMenu?.sub_headers?.map((subHeader: any) => {
        return (
          <Link
            href={`${headerMenu?.redirect_url}/${subHeader?.redirect_url}`}
            key={subHeader?.id}
            onClick={() => {
              setOpenSubMenu(undefined);
              setOpenMobileMenu(false);
            }}
          >
            <div className="py-3" key={subHeader?.id}>
              {subHeader?.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderSubMenuMobile;
