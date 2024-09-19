
const TopTuristPlace = ({ topProperties }) => {
    const {name,location,description,image}=topProperties;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img className="w-full"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h4>{location}</h4>
            </div>
        </div>
    );
};

export default TopTuristPlace;