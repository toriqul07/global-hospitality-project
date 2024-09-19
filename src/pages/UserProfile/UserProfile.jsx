import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    {
                        user ?
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    <img className="pt-2"
                                        src={user.photoURL}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="font-bold text-center">{user.displayName}</h2>
                                    <p className="text-center font-poppins">{user.email}</p>
                                </div>
                            </div>
                            :
                            <div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                    {/* <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" /> */}
                                </figure>
                                <div className="card-body">
                                    {/* <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default UserProfile;