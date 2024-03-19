import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills/SkillsList";
import Main from "./components/MainContent/Main";
import { fetchSWRData } from "./utils/fetch-api";

async function getProjectList() {
  try {
    const response = await fetchSWRData("/api/projects?populate=*");

    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getSkillsList() {
  try {
    const response = await fetchSWRData("/api/skills?populate=*");

    return response;
  } catch (error) {
    console.error(error);
  }
}
async function getSocialList() {
  try {
    const response = await fetchSWRData("/api/socials?populate=*");

    return response;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const projectList = await getProjectList();
  const skillsList = await getSkillsList();
  const mainSkils = skillsList.data.slice(0, 4);
  const socialList = await getSocialList();

  return (
    <>
      <Main data={socialList.data} />
      <Skills data={mainSkils} header="Main skills" isShowMore />
      <ProjectList data={projectList.data} />
      <AboutMe />
      <Contact data={socialList.data} />
    </>
  );
}
