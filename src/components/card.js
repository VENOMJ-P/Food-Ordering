import { CLOUDINARY_IMG } from "../config/serverConfig";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  totalRatingsString,
}) => {
  const link = `${CLOUDINARY_IMG}${cloudinaryImageId}`;

  return (
    <div className="card">
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
    </div>
  );
};

export default RestaurantCard;
