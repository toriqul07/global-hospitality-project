
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import slide1 from '../../assets/slide1.jpg'
import { Link, useLoaderData, useParams } from "react-router-dom";

const EstatePage = () => {
    const Estate = useLoaderData();
    const { id } = useParams();
    //console.log(typeof id ,id);
    const idInt = parseInt(id);
    const findEstate = Estate.find(findEstate => findEstate.id === idInt);
    //console.log(findEstate);
    const { estate_title, image,segment_name,description,price, Status,Area,location,facilities} = findEstate;
    return (
        <div>
            <Navbar></Navbar>
            {/* Background Image */}
            <div
                className="hero min-h-screen mb-4"
                style={{
                    backgroundImage: `url(${slide1})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">{estate_title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* main section */}
            <div>
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="border md:col-span-3">
                        <img src={image} alt="" />
                    </div>
                    {/* <div className="border">

                    </div> */}

                    <div className="card bg-base-100 w-50 shadow-xl">
                        <div className="card-body">
                        <p className="mb-2">
                        <span className="font-bold">segment_name: </span> {segment_name}
                        </p>
                        <p className="mb-2">
                        <span className="font-bold">description: </span>  {description}
                        </p>
                        <p className="mb-2">
                           <span className="font-bold">price: </span> {price}
                        </p>
                        <p className="mb-2">
                           <span className="font-bold">Status: </span> {Status}
                        </p>
                        <p className="mb-2">
                          <span className="font-bold">Area: </span>  {Area}
                        </p>
                        <p className="mb-2">
                            <span className="font-bold">facilities: </span>
                        {facilities[0]} {facilities[1]} {facilities[2]}
                        </p>
                            <div className="card-actions justify-end">
                                <Link className="w-full" to="/"><button className="btn btn-primary w-full">Back Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EstatePage;