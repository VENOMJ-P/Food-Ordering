import { CLOUDINARY_IMG } from "../config/serverConfig";

const RestaurantMenu = ({ menu }) => {
  return (
    <div id="menus">
      {menu?.map((element, index) => (
        <div className="menu" key={index}>
          <h2>{element?.card?.card?.title}</h2>
          <div id="dishes">
            {element?.card?.card?.itemCards.map((item) => (
              <div className="card" key={item?.card?.info?.id}>
                <div>
                  <img
                    src={CLOUDINARY_IMG + item?.card?.info?.imageId}
                    alt={`${item?.card?.info?.name} image`}
                    className="foodimg"
                  />
                </div>
                <div>
                  <h3>{item?.card?.info?.category}</h3>
                  <p>{item?.card?.info?.description}</p>
                  <h4>
                    &#8377;{" "}
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
