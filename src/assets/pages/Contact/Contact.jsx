import React,{ useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../Components/Loader/Loader";

const Contact = () => {
    let [state, setState] = useState(true);
  
    useEffect(() => {
      let stateChange = setTimeout(() => {
        setState(false);
      }, 2700);
    }, [state]);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let submit = (data) => {
    console.log(data);
    alert(`Submitted Succesfully`);
    reset();
  };

  return (
    <div>
      {
        state?<Loader/>:
        <div className="flex justify-center items-center h-[80vh]  px-5 ">
      <form
        onSubmit={handleSubmit(submit)}
        className="text-white w-full md:w-2/4  max-w-[450px]  shadow-md shadow-blue-400 px-5 py-3" id='contact-con'
      >
        <h1 className="text-lg animate-none font-semibold mb-1 shadow-sm text-center rounded-sm py-2 shadow-blue-400">
          Let's Work Together
        </h1>
        <div className="flex flex-col mb-2">
          <label htmlFor="" className="">
            Name
          </label>
          <div>
            <input
              type="text"
              className="px-2 py-1 outline-none text-black w-full text-lg rounded-sm"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is Required",
                pattern: {
                  value: /^[A-Z][a-zA-Z]{4,}$/,
                  message: "Name is Invalid",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Email</label>
          <div>
            <input
              type="email"
              className="px-2 py-1 outline-none w-full text-black text-lg rounded-sm"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email is Invalid",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Phone Number:</label>
          <div>
            <input
              type="number"
              className="px-2 py-1 outline-none text-black text-lg rounded-sm w-full"
              {...register("phoneNumber", {
                required: "Phone Number is Required",
                pattern: {
                  value: /^(\+91[\s-]?)?[6-9]\d{9}$/,
                  message: "Phone Number is Invalid",
                },
              })}
            />
            {errors.phoneNumber && (
              <p className="text-red-400 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="">Message:</label>
          <div>
            <textarea
              name=""
              id=""
              className="px-2 w-full py-1 outline-none text-black text-lg rounded-sm"
              {...register("message", { required: "Message is Required" })}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <button
          className="bg-white border-b-2 border-blue-400 px-5 py-1 rounded-md text-blue-400 cursor-pointer animate-none mt-4 mx-auto block "
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
      }
    </div>
  );
};

export default Contact;
