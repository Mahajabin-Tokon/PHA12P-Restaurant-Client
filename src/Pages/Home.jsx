import React from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import PopularMenu from "../Components/PopularMenu";
import Featured from "../Components/Featured/Featured";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet><title>Bistro Boss | Home</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
