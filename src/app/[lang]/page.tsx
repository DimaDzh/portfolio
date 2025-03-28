import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills/SkillsList";
import Main from "./components/MainContent/Main";
import { fetchAPI } from "./utils/fetch-api";
import axios from "axios";
async function getProjectList() {
  try {
    const response = await axios.get("http://localhost:5000/api/projects");
    return response.data;
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
  return (
    <>
      <Main />
    </>
  );
}
