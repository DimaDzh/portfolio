import React, { FC } from "react";
type Data = {
  data: any;
};
const Hero: FC<Data> = ({ data }) => {
  console.log("Hero", data);
  return (
    <section className=" text-white py-20">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section: About Me */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m Dmytro Dzharty!
            </h1>
            <p className="text-lg md:text-xl mb-6">
              I&apos;m a passionate Front-End Developer with a love for creating
              beautiful and functional web applications. I specialize in NextJS,
              React, TypeScript, Strapi CMS, and Node.js and enjoy solving
              complex problems with clean and efficient code. My experience
              includes developing scalable web applications, integrating
              seamless front-end and back-end solutions, and optimizing
              performance to ensure the best user experience.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            {/* <img
              src="/path-to-your-image.jpg"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
