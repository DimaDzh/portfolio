import React, { FC } from "react";
import ProjectItem from "./ProjectItem";
import NewsSerchSpaImage from "../../public/assets/projects/spa-news.jpg";
import OnlineRestrauntImage from "../../public/assets/projects/online-restraunt.png";
import OnlineShopImage from "../../public/assets/projects/online-shop.png";

const ProjectList: FC = () => {
  return (
    <section id="projects" className="container">
      <header className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          My Projects
        </p>
        <h2 className="py-4">What I`ve Built</h2>
      </header>
      <main className="container flex justify-center flex-col lg:flex-row">
        <ProjectItem
          title={"News Search SPA"}
          backgroundImg={NewsSerchSpaImage}
          tech={"React TS"}
          projectUrl={"https://github.com/DimaDzh/Spaceflight-News"}
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
