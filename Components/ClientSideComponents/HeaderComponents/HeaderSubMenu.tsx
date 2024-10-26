import Link from "next/link";
import React from "react";

type Props = {
  openSubMenu: number | undefined;
  menuKey: number;
  headerMenu: any;
  moveDown: boolean;
  setOpenSubMenu: any;
};

const HeaderSubMenu = ({
  openSubMenu,
  menuKey,
  headerMenu,
  moveDown,
  setOpenSubMenu,
}: Props) => {
  return (
    <div
      className={` open w-[200px] absolute top-full -start-10 ${
        openSubMenu === menuKey ? "block" : "hidden"
      } rounded-md shadow-md py-2 z-50`}
      style={{
        ...(moveDown
          ? {
              background: `var(--tgh-tertiary)`,
              backdropFilter: "blur(35px)",
            }
          : {
              background: `#000 `,
              backdropFilter: "blur(35px)",
              color: "#fff",
            }),
      }}
    >
      {headerMenu?.sub_items?.map((subHeader: any, index: number) => (
        <Link
          href={`${headerMenu?.redirect_url}/${subHeader?.redirect_url}`}
          key={subHeader?.id}
          onClick={() => setOpenSubMenu(undefined)}
        >
          <p
            className="px-2 py-2 open hover:underline underline-offset-4"
            key={subHeader?.id}
          >
            {subHeader?.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default HeaderSubMenu;
