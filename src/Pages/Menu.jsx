import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import coverImg from "../assets/menu/banner3.jpg"
import PopularMenu from '../Components/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={coverImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title="our menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;