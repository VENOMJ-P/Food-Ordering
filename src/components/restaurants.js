import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

import { MENU_URL } from "../config/serverConfig";
import RestaurantsHead from "./restaurants-head";
import RestaurantMenu from "./restaurants-menu";

const Restaurants = () => {
  const [menu, setMenu] = useState();
  const [restaurantTitle, setRestaurantTitle] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchAllMenu();
  }, []);

  async function fetchAllMenu() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(MENU_URL + id);
      const json = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch menu");
      }
      const restaurantDetail = json?.data?.cards[2]?.card?.card;
      setRestaurantTitle(restaurantDetail);
      const menuDetail =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (filter) => filter?.card?.card?.itemCards
        );
      setMenu(menuDetail);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <RestaurantsHead {...restaurantTitle?.info} />
      <RestaurantMenu menu={menu} />
    </>
  );
};

export default Restaurants;
