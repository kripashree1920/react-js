import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
import { RSTUARANT_MENU} from "../constants"
const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(FETCH_MENU_URL+resId+RSTUARANT_MENU )
    const data = await fetch(FETCH_MENU_URL+resId+RSTUARANT_MENU  );
    const json = await data.json();
    setRestauraunt(json.data);
    console.log(json)
  }

  return restaurant;
};

export default useRestaurant;
