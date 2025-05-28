import React from "react";

const BlogCard = ({ img, headlines }) => {
  return (
    <div className=" w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
        className=" h-64 md:h-96 lg:h-40 w-full rounded-lg"
        src={img}
        alt="img"
      />
      <h2 className=" text-lg text-center font-semibold">{headlines}</h2>
      <p className=" text-center text-sm">
      {/* Stay informed and inspired with our blog, where we share expert health tips, wellness advice, and the latest medical updates. Whether you're looking for practical guidance or insights into living a healthier life, our blog is here to support your journey to better*/}
      </p>
    </div>
  );
};

export default BlogCard;