import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestuarant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const rest = useRestaurant(resId);
  const restaurant = rest?.cards[2]?.card.card?.info;

  
  
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center mt-6 border border-red-900 w-[70%] m-auto" style={{backgroundColor:"#f0f0f0"}}>
      <div className="p-5 ">
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img className ="h-96"src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1 className="text-red-800 font-bold text-xl">Menu</h1>
        <ul data-testid="menu" >
          {Object.values(rest?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map((item) => (
            <li key={item.card.info?.id} className="flex justify-between">
              {item?.card?.info?.name} -{" "}
              <button
                data-testid="addBtn"
                className="text-amber-800"
                onClick={() => addFoodItem(item.card.info)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;