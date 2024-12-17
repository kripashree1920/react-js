import { useEffect, useState } from "react";
import { LIST_API } from "./constants";

const useListOfRestuarants = () => {
  const [listOfRestuarants, setlistOfRestuarants] = useState(null);
  const [filterOfRestuarants, setFilterOfRestuarants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_API);
    const json = await data.json();
    setlistOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return { listOfRestuarants, filterOfRestuarants };
};

export default useListOfRestuarants;
