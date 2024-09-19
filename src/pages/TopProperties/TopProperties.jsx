import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import TopTuristPlace from "../TopTuristPlace/TopTuristPlace";


const TopProperties = () => {
    const topProperties=useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    topProperties.map(topProp=><TopTuristPlace key={topProp.id}
                        topProperties={topProp}></TopTuristPlace>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TopProperties;