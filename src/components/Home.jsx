import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
           Our hospital is a leading healthcare provider offering expert medical care with state-of-the-art facilities. Our dedicated team of professions is committed to delivering good treatment.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;