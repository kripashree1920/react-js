import { restaurantList } from "../constants";
import RestaurantCard from "./ReastuarantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"  );
    const json = await data.json();
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants

      )
    
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
      
        <div className="m-4 flex">
        <div className="m-4 p-4">
          <input
            type="text "
            data-testid="searchInput"
            className=" border border-solid border-red-800 px-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e?.target?.value);
            }}
          />
          <button
            className="ml-3 py-1 bg-red-800 text-white px-3 rounded-md"
            onClick={() => {
              const filteredList = allRestaurants?.filter((data) => {
                return data?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase());
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="bg-red-800 text-white px-4 py-1 rounded-md "
          onClick={() => {
            const filteredList = allRestaurants.filter((res) => {
              return res?.info?.avgRating > 4.5;
            });
            console.log(filteredList);
            
            setFilteredRestaurants(filteredList);

          }}
        >
          Top Rated Restuarants
        </button>
        </div>

        </div>
        <input
        className="px-2"
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
        className="mx-5 px-2"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap " data-testid="res-list">
        {/* You have to write logic for NO restraunt fount here */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;