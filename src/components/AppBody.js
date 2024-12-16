import RestCards from "./ReactCards";
import { restLists } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const AppBody = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState([]);
  const [filterOfRestuarants, setFilterOfRestuarants] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.3408807&lng=74.7421427&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  return listOfRestuarants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-container">
      <div className="btn">
        <div className="search-section">
          <input
            type="text "
            className="search-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e?.target?.value);
            }}
          />
          <button
            className="btn-ui"
            onClick={() => {
              const filteredList = listOfRestuarants?.filter((data) => {
                 return data?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchInput?.toLowerCase());
                });
                setFilterOfRestuarants(filteredList);
                
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-filter btn-ui"
          onClick={() => {
            const filteredList = listOfRestuarants.filter((res) => {
              return res?.info?.avgRating > 4.5;
            });
            setlistOfRestuarants(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>

      <div className="rest-lists">
        {filterOfRestuarants?.map((restuarant) => (
          <RestCards key={restuarant?.info?.id} restData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
