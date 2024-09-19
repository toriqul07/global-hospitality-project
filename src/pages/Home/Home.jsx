import { useEffect, useState } from "react";
import Destination from "../../components/Destination/Destination";
import Slider from "../../components/Slider/Slider";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";


const Home = () => {
   const estateCardData=useLoaderData();
//    console.log(estateCard);
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Destination></Destination>
            {/* All card here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    estateCardData.map(estate=><EstateCard key={estate.id}
                        estateCardData={estate}></EstateCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;