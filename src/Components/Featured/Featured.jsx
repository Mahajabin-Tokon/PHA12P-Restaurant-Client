import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div className="">
          <img src={featuredImg} alt="Featured Item Image" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit suscipit necessitatibus eum a corporis ipsum ullam
            sunt voluptatum sint assumenda nam minus commodi soluta, sapiente at
            fugit totam. Accusamus explicabo in provident quisquam fuga
            voluptatum iure veniam consectetur aperiam libero impedit dolor
            numquam, animi tempora rem esse enim fugit dolorem.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
