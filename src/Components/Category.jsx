import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../assets/home/slide1.jpg";
import img2 from "../assets/home/slide2.jpg";
import img3 from "../assets/home/slide3.jpg";
import img4 from "../assets/home/slide4.jpg";
import img5 from "../assets/home/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle subHeading={"From 11am to 10pm"} heading={"Order Now"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwipe mb-24"
      >
        <SwiperSlide>
          <img src={img1} alt="Category Slide" />
          <h3 className="text-white text-center -mt-24 text-3xl">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Category Slide" />
          <h3 className="text-white text-center -mt-24 text-3xl">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Category Slide" />
          <h3 className="text-white text-center -mt-24 text-3xl">Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Category Slide" />
          <h3 className="text-white text-center -mt-24 text-3xl">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Category Slide" />
          <h3 className="text-white text-center -mt-24 text-3xl">Pizze</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
