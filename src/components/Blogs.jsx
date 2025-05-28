import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Explore our blog for expert health tips, insights, and updates to help you live a healthier, happier life
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep"  />
          <p>Discover the secrets of sleep in our blog, where we explore tips, science, and solutions for better rest and improved health</p>
          <BlogCard img={img2} headlines="The Heart-Healthy Diet" />
          <p>A healthy diet is the foundation of good health. Our blog shares simple tips, nutritious recipes, and expert advice to help you make better food choices and boost your well-being.</p>
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations"
          />
          <p>Understanding pediatric vaccinations is key to protecting your child’s health. Our blog breaks down the importance, schedule, and benefits of vaccines to keep your little ones safe and healthy.</p>
          <BlogCard img={img4} headlines="Navigating Mental Health" />
          <p>Navigating mental health is essential for overall well-being. Our blog provides tips, resources, and support to help you manage stress, build resilience, and find balance in life.</p>
          <BlogCard img={img5} headlines="The Importance of Regular Exercise" />
          <p>Regular exercise is key to a healthy life. It boosts energy, improves mood, and keeps your body strong. Start small, stay consistent, and feel the difference!</p>
          <BlogCard img={img6} headlines="Skin Health 101" />
          <p>Healthy skin starts with proper care. Our blog offers tips, routines, and expert advice to help you achieve glowing, radiant skin naturally.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;