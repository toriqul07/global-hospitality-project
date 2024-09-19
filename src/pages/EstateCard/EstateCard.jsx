import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const EstateCard = ({ estateCardData }) => {
    const { estate_title, image, segment_name, location,id } = estateCardData;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex items-center justify-between">
                    <h6>{segment_name}</h6>
                    <div className="flex items-center justify-between">
                        <IoLocationOutline></IoLocationOutline>
                        <h6>{location}</h6>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/estate/${id}`} className="btn btn-primary w-full"><button>View Detais</button></Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;