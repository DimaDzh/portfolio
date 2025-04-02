import React, { FC } from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";
import { MenusItem, StrapiImage } from "@/[lang]/types";
import { getStrapiImageUrl } from "@/[lang]/utils/getStrapiMedia";
import { mockHeaderBarData } from "./mockdata";
type Data = {
  data: {
    id: 1;
    logo: StrapiImage;
  };
  menus: {
    id: number;
    title: string;
    slug: string;
    menusList: MenusItem[];
  };
};

type HeaderBarProps = {
  menus: MenusItem[];
};

const HeaderBar: FC<HeaderBarProps> = ({ menus: menusList }) => {
  const { data } = mockHeaderBarData;
  const logoUrl = getStrapiImageUrl(data?.logo);
  return (
    <header>
      <div id="header" className="hidden overflow-hidden lg:flex">
        <Navbar logoUrl={logoUrl} menusList={menusList} />
      </div>
      <div id="header" className="lg:hidden">
        <MobNavbar logoUrl={logoUrl} menusList={menusList} />
      </div>
    </header>
  );
};

export default HeaderBar;
