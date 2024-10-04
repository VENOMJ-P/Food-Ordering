import { CLOUDINARY_IMG } from "../config/serverConfig";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  totalRatingsString,
  id,
}) => {
  const link = `${CLOUDINARY_IMG}${cloudinaryImageId}`;

  return (
    <div className="card">
      <Link to={"/restaurants/" + id}>
        <div>
          <img
            className="foodimg"
            src={link}
            alt={`${name} image`}
            onError={(e) => {
              e.target.src = "fallback_image_url";
            }} // Fallback image in case of error
          />
        </div>
        <div>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <p>{`${avgRating} stars | ${totalRatingsString}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
