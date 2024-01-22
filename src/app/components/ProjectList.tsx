import React, { FC } from "react";
import ProjectItem from "./ProjectItem";
import NewsSerchSpaImage from "../../../public/assets/projects/spa-news.jpg";
import OnlineRestrauntImage from "../../../public/assets/projects/online-restraunt.png";
import OnlineShopImage from "../../../public/assets/projects/online-shop.png";
import BiomondeImage from "../../../public/assets/projects/biomonde.webp";

const ProjectList: FC = () => {
  return (
    <section id="projects" className="container">
      <header className="mx-auto py-16">
        <h2 className="py-4">What I`ve Built</h2>
      </header>
      <main className=" flex justify-center flex-col lg:flex-row">
        <ProjectItem
          title={"MAGASINS BIO BIOMONDE"}
          backgroundImg={BiomondeImage}
          tech={"NextJS TS TailwindCSS StrapiJS"}
          projectUrl={"https://www.biomonde.fr"}
        />
        <ProjectItem
          title={"Online restraunt"}
          backgroundImg={OnlineRestrauntImage}
          tech={"React TS"}
          projectUrl={"https://github.com/DimaDzh/react-modul"}
        />
        <ProjectItem
          title={"Online MacShop"}
          backgroundImg={OnlineShopImage}
          tech={"React TS"}
          projectUrl={"https://github.com/DimaDzh/js-modulwork"}
        />
      </main>
    </section>
  );
};

export default ProjectList;
