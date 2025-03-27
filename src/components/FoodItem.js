import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, description, imageId, price }) => {
  console.log(imageId)
  return (
    <div className="w-[256px] p-2 m-2 shadow-lg"  style={{backgroundColor:"#f0f0f0"}}>
      <img className ="h-56" src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl text-amber-800">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;