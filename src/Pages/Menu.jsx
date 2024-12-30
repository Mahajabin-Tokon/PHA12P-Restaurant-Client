import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import coverImg from "../assets/menu/banner3.jpg";
import mImgDessert from "../assets/menu/dessert-bg.jpeg";
import mImgSoup from "../assets/menu/soup-bg.jpg";
import mImgSalad from "../assets/menu/salad-bg.jpg";
import mImgPizze from "../assets/menu/pizza-bg.jpg";
import useMenu from "../Hooks/useMenu";
import MenuCategory from "../Components/Featured/MenuCategory";
import SectionTitle from "../Components/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SectionTitle
        subHeading="Our Menu"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        img={mImgDessert}
      ></MenuCategory>
      <MenuCategory items={soup} title={"Soup"} img={mImgSoup}></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        img={mImgSalad}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        img={mImgPizze}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
