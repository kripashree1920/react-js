import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    // <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
    <div className="m-4 p-4 w-[250px] h-[95%]  hover:border hover:border-red-900 cursor-pointer" style={{backgroundColor:"#f0f0f0"}}>
      <img className="h-40 w-full"src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-red-800 font-bold py-4 text-lg">{name}</h2>
      <h3 className="text-red-800">{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default RestrauntCard;