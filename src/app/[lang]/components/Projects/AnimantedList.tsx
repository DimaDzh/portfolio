"use client";
import { useRef } from "react";
// import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectItem, { ProjectItemProps } from "../ProjectItem";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

type ProjectListData = {
  data: {
    id: number;
    attributes: ProjectItemProps;
  }[];
};

const Single = ({ item }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="my-12">
      <div className="flex items-center justify-center w-full h-full  overflow-hidden">
        <div className="wrapper max-w-6xl h-[500px] m-auto flex items-center justify-center gap-12">
          <div className="imageContainer h-[500px] flex-1" ref={ref}>
            <Image
              src={item.img}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-contain lg:object-cover"
            />
          </div>
          <motion.div
            className="flex flex-1 flex-col gap-5 textContainer"
            style={{ y }}
          >
            <h2 className="text-5xl">{item.title}</h2>
            <p>{item.desc}</p>
            <button className="bg-orange-400 rounded-lg px-6 py-3 w-fit">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioScroll = ({ data }: ProjectListData) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio relative my-40" ref={ref}>
      <div className="progress sticky top-0 left-0 pt-12 text-center text-orange-500 text-2xl">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-3 bg-white"
        ></motion.div>
      </div>
      {data.map(({ attributes, id }) => (
        <ProjectItem
          key={id}
          title={attributes.title}
          bgImage={attributes.bgImage}
          tech={attributes.tech}
          link={attributes.link}
        />
      ))}
    </div>
  );
};

export default PortfolioScroll;
