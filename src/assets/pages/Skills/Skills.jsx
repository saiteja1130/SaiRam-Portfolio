import React,{useState,useEffect} from 'react'
import { skills } from '../../assets';
import Loader from '../../Components/Loader/Loader.jsx';
const Skills = () => {
  let [state, setState] = useState(true);

  useEffect(() => {
    let stateChange = setTimeout(() => {
      setState(false);
    }, 2700);
  }, [state]);

  return (
    <div>
      {
        state?<Loader/>:<div className='text-white flex flex-col  justify-center md:py-12 md:px-16 lg:px-24 sm:px-8 px-4 py-8 pb-24'>
        <div className='font-medium self-start pb-2 rounded-md px-2 shadow-md sm:w-full md:w-auto shadow-blue-400' id='skills-name'>
          <h1 className='text-xl md:text-4xl sm:text-2xl mb-2'>MY TECH STACK</h1>
          <p className='text-xs sm:text-sm md:text-base' id='paraabout'>Proficient in Java, OOP concepts, Spring Boot, APIs, database management, debugging, and problem-solving skills.</p>
        </div>
        <div className=' self-center grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 gap-y-5 md:gap-y-16 gap-x-5 mt-10 md:mt-16'>
        {
          skills.map((item,index)=>{
            return <div id='skills-con' className='text-white w-full mx-auto shadow-md py-5 rounded-md shadow-blue-400' key={index}>
              <img src={item.img} className='w-[50%] sm:w-1/2 lg:w-2/3 xl:w-1/2 md:w-1/2 mx-auto hover:scale-110 cursor-pointer transition-all duration-700' alt="" />
              <p className='text-center text-sm  font-semibold md:font-normal'>{item.name}</p>
            </div>
          })
        }
        </div>
      </div>
      }
    </div>
    
  )
}

export default Skills
