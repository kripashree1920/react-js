import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center"> 
      <h1 className="font-bold text-3xl m-5 text-amber-800"> Cart Items - {cartItems.length}</h1>
     { cartItems.length !==0  && <button
        className="bg-amber-800 text-white rounded-md p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>}
      <div className="flex justify-center ">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;