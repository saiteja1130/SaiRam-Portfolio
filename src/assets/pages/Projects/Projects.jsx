import React, { useState, useEffect } from "react";
import { projects } from "../../assets";
import Loader from "../../Components/Loader/Loader";

const Projects = () => {
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
        <div className="px-3 py-5 md:px-12 md:py-10 xl:px-48 pb-24 lg:mb-36 justify-center   flex flex-col md:flex-row gap-10">
          {projects.map((item, index) => {
            return (
              <div
                key={index}
                className=" text-white  shadow-md shadow-blue-400 p-5 py-4"
                id="project-con"
              >
                <div className="">
                  <img
                    src={item.projectImg}
                    className="w-2/3 mb-5  md:w-2/3 mx-auto hover:scale-110 transition-all duration-500 ease-in-out"
                    alt=""
                  />
                  <h1 className="text-xl mt-2 border-b-2 pb-2 font-semibold animate-none">
                    {item.name}
                  </h1>
                  <h2 className="text-sm mt-1 font-medium">{item.role}</h2>
                  <h3 className="text-xs mt-1">{item.technologies}</h3>
                  <p className="mt-1 text-xs ">{item.description}</p>
                  <h4 className="text-sm border-b-2 pb-2 mt-2">
                    {item.keycontribution}
                  </h4>
                  <p className="text-xs mt-1">{item.keycontributionDes}</p>
                  <div className="flex justify-around mt-2 items-center border-t-2 pt-2">
                    <button className="bg-white border-b-2 border-blue-400 px-5 py-1 rounded-md text-blue-400 cursor-pointer animate-none ">
                      {item.getProject}
                    </button>
                    <a
                      href="#"
                      className="bg-white border-b-2 border-blue-400 px-5 py-1 rounded-md text-blue-400"
                    >
                      {item.github}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
