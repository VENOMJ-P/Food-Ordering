import { useState, useEffect } from "react";

import RestaurantCard from "./card.js";
import Shimmer from "./shimmer.js";

const filterRestaurantsByName = (searchQuery, restaurantList) => {
  if (!searchQuery) return restaurantList;
  return restaurantList.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const RestaurantSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(allRestaurants);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    const filteredResults = filterRestaurantsByName(
      searchQuery,
      allRestaurants
    );
    setFilteredRestaurants(filteredResults);
  };

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  async function fetchAllRestaurants() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }

      const json = await response.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
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
      <div className="search-food">
        <input
          type="text"
          name="search"
          id="search-input"
          placeholder="Search for a restaurant"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="search" id="search-btn" onClick={handleSearch}>
          Submit
        </button>
      </div>
      <div className="food-card">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </>
  );
};

export default RestaurantSearch;
