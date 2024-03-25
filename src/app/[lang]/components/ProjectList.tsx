import React, { FC } from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";

type ProjectListData = {
  data: {
    id: number;
    attributes: ProjectItemProps;
  }[];
};

const ProjectList: FC<ProjectListData> = ({ data }) => {
  return (
    <section id="projects" className="container">
      <header className="mx-auto py-16">
        <h2 className="py-4">What I`ve Built</h2>
      </header>
      {data.length && (
        <ul className=" flex justify-center flex-col h-96 lg:flex-row">
          {data.map(({ attributes, id }) => {
            return (
              <ProjectItem
                key={"project-item-" + id}
                title={attributes.title}
                bgImage={attributes.bgImage}
                tech={attributes.tech}
                link={attributes.link}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ProjectList;
