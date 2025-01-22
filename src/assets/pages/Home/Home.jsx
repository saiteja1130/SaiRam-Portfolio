import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader.jsx";
import profile from '../../../../public/profile.png';
import resume from "../../../../public/resume.pdf";

const Home = () => {
  let [state, setState] = useState(true);

  useEffect(() => {
    let stateChange = setTimeout(() => {
      setState(false);
    }, 2700);
  }, [state]);

  return (
    <div>
      {state ? (
        <Loader />
      ) : (
        <div className=" flex flex-col px-5 pt-12 sm:px-8 pb-24">
          <div
            className="flex flex-col justify-center text-white "
            id="devName"
          >
            <div className="flex sm:flex-row flex-col justify-center sm:gap-12 sm:items-center">
              <img src={profile} className="md:w-1/3  lg:w-1/5 sm:w-1/4 w-1/2 self-center sm:self-auto rounded-full" alt="" />
              <div className="text-4xl sm:text-5xl md:text-6xl font-semibold">
                <h1>Hi</h1>
                <h1>Im Sairam Sanku</h1>
                <h1>Java Developer</h1>
                <button className="bg-white  text-black text-xs px-2 py-2 mt-4 rounded-md border-b-2 border-blue-500">
                  <a href={resume} download className="text-xs">
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
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
