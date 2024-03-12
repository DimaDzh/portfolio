import React, { FC } from "react";
import Navbar from "./Navbar";
import MobNavbar from "./MobNavbar";
import { MenusItem, StrapiImage } from "@/[lang]/types";
import { getStrapiImageUrl } from "@/[lang]/utils/getStrapiMedia";

type Data = {
  data: {
    id: 1;
    attributes: {
      logo: StrapiImage;
    };
  };
  menus: {
    id: number;
    attributes: {
      title: string;
      slug: string;
      items: MenusItem;
    };
  }[];
};

const HeaderBar: FC<Data> = ({ data, menus }) => {
  const { attributes } = data;

  const logoUrl = getStrapiImageUrl(attributes.logo);
  return (
    <>
      <div id="header" className="hidden overflow-hidden lg:flex">
        <Navbar logoUrl={logoUrl} menusList={menus[0].attributes.items} />
      </div>
      <div id="header" className="lg:hidden">
        <MobNavbar logoUrl={logoUrl} menusList={menus[0].attributes.items} />
      </div>
    </>
  );
};

export default HeaderBar;
