import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader.jsx";
import "./Home.css";
import resume from "../../../../public/resume.pdf";

const Home = () => {
  let [state, setState] = useState(true);

  useEffect(() => {
    let stateChange = setTimeout(() => {
      setState(false);
    }, 4000);
  }, [state]);

  return (
    <div>
      {state ? (
        <Loader />
      ) : (
        <div className=" flex flex-col px-8 mt-12">
          <div
            className="flex flex-col justify-center text-white text-4xl sm:text-6xl md:text-7xl font-semibold"
            id="devName"
          >
            <h1>Hi</h1>
            <h1>Im Sairam</h1>
            <h1>Java Developer</h1>
            <button className="bg-white w-1/2 text-black text-xs px-2 sm:w-1/3 md:w-1/6 py-2 mt-4 rounded-md border-b-2 border-blue-500">
              <a href={resume} download className="text-xs">
                Download Resume
              </a>
            </button>
          </div>
          <div className="text-white text-sm md:text-base  mt-5">
            <h1 className="text-xl mb-2 border-b-2 pb-1">About</h1>
            <p
              className="hyphens-auto text-xs sm:text-sm md:text-base"
              id="paraabout"
            >
              I am a skilled Java Developer with over 1 year of experience in
              designing and developing scalable web and enterprise applications.
              <br />
              Proficient in Java/J2EE, Spring, and Spring Boot, I have expertise
              in building RESTful APIs and implementing design patterns such as
              Singleton, DAO, and MVC. My experience includes using tools like
              Maven for build automation, Git for version control, and LOG4J for
              effective debugging and logging. I am committed to delivering
              high-quality, maintainable solutions while continuously adapting
              to new technologies and environments. If you're looking for a
              dedicated professional to contribute to impactful software
              development projects, let’s connect.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
