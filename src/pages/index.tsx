import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import RootLayout from "@/components/layout";
import Main from "@/components/Main";
import ProjectList from "@/components/ProjectList";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DzhartyDS | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer ." />
      </Head>
      <Main />
      <Skills />
      <ProjectList />
      <AboutMe />
      <Contact />
    </>
  );
}
