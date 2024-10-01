import RestaurantCard from "./card.js";
import { RESTAURANT } from "../config/restaurants.js";
import { useState } from "react";

const filterRestaurantsByName = (searchQuery, restaurantList) => {
  if (!searchQuery) return restaurantList;
  return restaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const RestaurantSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let [filteredRestaurants, setFilteredRestaurants] = useState(RESTAURANT);

  const handleSearch = () => {
    const filteredResults = filterRestaurantsByName(searchQuery, RESTAURANT);
    setFilteredRestaurants(filteredResults);
  };
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
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </>
  );
};

export default RestaurantSearch;
