import { CLOUDINARY_IMG } from "../config/serverConfig";

const RestaurantsHead = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  totalRatingsString,
  cuisines,
  areaName,
}) => {
  return (
    <div className="restaurant-head">
      <h1>{name}</h1>
      <img
        className="restaurant-image"
        src={CLOUDINARY_IMG + cloudinaryImageId}
      />
      <h2>{`${avgRatingString} ( ${totalRatingsString} ) `}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};

export default RestaurantsHead;
