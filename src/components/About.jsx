import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
            Our hspital is a trusted healthcare institution dedicated to providing exceptional medical care to our community. With a team of highluy skilled doctors nurses and  staff.
        </p>
        <p className="text-justify lg:text-start">
            We are committed to improving the health and well-being of our patients through advanced medical technology, innovative treatment to every patient-centered approach. Our goal is to ensure everyone.
        </p>
        <p className="text-justify lg:text-start">
           At our hospital, we combaine experties with empathy to meet the unique needs of each individual. From routine check-up to specialized care, our modren facilites and dedicated team are here to guide yu on your journey to better health.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;