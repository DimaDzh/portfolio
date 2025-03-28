import React, { FC } from "react";
import ProjectItem, { ProjectItemProps } from "./ProjectItem";

type ProjectListData = {
  data: {
    id: number;
    title: string;
    description?: string;
    technologies: string[];
    githubLink?: string;
    liveDemo?: string;
  }[];
};

const ProjectList: FC<ProjectListData> = ({ data }) => {
  return (
    <section id="projects" className="container">
      <header className="mx-auto py-16">
        <h2 className="py-4">What I`ve Built</h2>
      </header>
      {data.length > 0 && (
        <ul className="grid grid-cols-3 gap-12 lg:flex-row">
          {data.map(
            ({
              id,
              technologies,
              title,
              description,
              githubLink,
              liveDemo,
            }) => {
              return (
                <ProjectItem
                  key={"project-item-" + id}
                  title={title}
                  description={description}
                  technologies={technologies}
                  githubLink={githubLink}
                  liveDemo={liveDemo}
                />
              );
            }
          )}
        </ul>
      )}
    </section>
  );
};

export default ProjectList;
