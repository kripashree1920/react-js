import RestCards from "./ReactCards";
import { restLists } from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfRestuarants from "../utils/useListOfRestuarants";

const AppBody = () => {

  const { listOfRestuarants, filterOfRestuarants } = useListOfRestuarants();
  const [filteredRestaurants, setFilteredRestaurants] = useState(filterOfRestuarants);
  const [restuarantList,setRestuarantList]= useState(listOfRestuarants);

  useEffect(() => {
    if (listOfRestuarants) {
      setRestuarantList(listOfRestuarants); 
    }
  }, [listOfRestuarants]); 

  useEffect(() => {
    if (filterOfRestuarants) {
      setFilteredRestaurants(filterOfRestuarants); 
    }
  }, [filterOfRestuarants]); 

  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline ! please check your internet connection :(</h1>;
  }

  return restuarantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="rest-container">
      <div className="m-4 flex">
        <div className="m-4 p-4">
          <input
            type="text "
            className=" border border-solid border-red-800"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e?.target?.value);
            }}
          />
          <button
            className="ml-3 py-1 bg-red-800 text-white px-3 rounded-md"
            onClick={() => {
              const filteredList = restuarantList?.filter((data) => {
                return data?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchInput?.toLowerCase());
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
            const filteredList = restuarantList.filter((res) => {
              return res?.info?.avgRating > 4.5;
            });
            setRestuarantList(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurants?.map((restuarant) => (
          <RestCards key={restuarant?.info?.id} restData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default AppBody;
