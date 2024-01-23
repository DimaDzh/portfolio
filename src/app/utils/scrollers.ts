import { scroller } from "react-scroll";

export const scrollToSection = (id: string) => {
  scroller.scrollTo(id, {
    smooth: true,
    duration: 500,
    offset: -125,
  });
};
