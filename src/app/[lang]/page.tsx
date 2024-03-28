import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills/SkillsList";
import Main from "./components/MainContent/Main";
import { fetchAPI } from "./utils/fetch-api";
import ScrollGallery from "./components/ScrollGallery";
import PortfolioScroll from "./components/Projects/AnimantedList";

async function getProjectList() {
  try {
    const response = await fetchAPI("/projects", {
      populate: "*",
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getSkillsList() {
  try {
    const response = await fetchAPI("/skills", { populate: "*" });

    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getSocialList() {
  try {
    const response = await fetchAPI("/contacts");

    return response;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const projectList = await getProjectList();
  const skillsList = await getSkillsList();
  const mainSkils = skillsList?.data?.slice(0, 4);
  const socialList = await getSocialList();

  return (
    <>
      <Main data={socialList.data} />
      <Skills data={mainSkils} header="Main skills" isShowMore />
      {/* <PortfolioScroll data={projectList.data} /> */}
      <ProjectList data={projectList.data} />
      <AboutMe />
      <Contact data={socialList.data} />
    </>
  );
}
