import { SkillsItemProps } from "../SkillsItem";

type SkillsListData = {
  header: string;
  data: {
    id: number;
    attributes: SkillsItemProps;
  }[];
  isShowMore?: boolean;
};

const mockSkills: SkillsListData = {
  header: "My Skills",
  data: [
    {
      id: 1,
      attributes: {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        locale: "en",
        icon: {
          url: "/icons/javascript.svg",
          alt: "JavaScript Icon",
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: "React",
        link: "https://reactjs.org/",
        locale: "en",
        icon: {
          url: "/icons/react.svg",
          alt: "React Icon",
        },
      },
    },
    {
      id: 3,
      attributes: {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        locale: "en",
        icon: {
          url: "/icons/typescript.svg",
          alt: "TypeScript Icon",
        },
      },
    },
    {
      id: 4,
      attributes: {
        name: "Node.js",
        link: "https://nodejs.org/",
        locale: "en",
        icon: {
          url: "/icons/nodejs.svg",
          alt: "Node.js Icon",
        },
      },
    },
  ],
  isShowMore: true,
};

export default mockSkills;
