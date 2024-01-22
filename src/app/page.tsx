import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills/SkillsList";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Main />
      <Skills />
      <ProjectList />
      <AboutMe />
      <Contact />
    </>
  );
}
