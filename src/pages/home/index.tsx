import React from 'react';
import { HomeBlock} from "./style";

import {GlobalStyle} from "../../styles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import House from './house';

const Home = () => {
    return (
        <>
            <GlobalStyle/>
            <Header/>
            <HomeBlock>

                <House/>

            </HomeBlock>
            <Footer/>
        </>

    );
};

export default Home;