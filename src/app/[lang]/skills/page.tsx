import React from "react";
import { fetchAPI, fetchSWRData } from "../utils/fetch-api";
import Skills from "../components/Skills/SkillsList";
type Props = {};

async function getSkillsList() {
  try {
    const response = await fetchAPI("/skills", { populate: "*" });

    return response;
  } catch (error) {
    console.error(error);
  }
}

const SkillsPage = async (props: Props) => {
  const skillsList = await getSkillsList();
  return (
    <div className="my-24">
      <Skills header="My skills" data={skillsList.data} />
    </div>
  );
};

export default SkillsPage;
