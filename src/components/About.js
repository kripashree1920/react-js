const Abouts = () => {
  return (
    <div className="about-contaimer">
      <h1>About Us</h1>

      <div className="about">
        Swiggy is an Indian online food ordering and delivery company. Founded
        in 2014, Swiggy is headquartered in Bangalore and operates in more than
        580 Indian cities, as of July 2023. Besides food delivery, the
        platform also provides quick commerce services under the name Swiggy
        Instamart, and same-day package deliveries with Swiggy Genie. It rivals
        homegrown startup Zomato in food delivery and hyperlocal marketplace.
      </div>
    </div>
  );
};

// CLASS BASED COMPONENT
import React from "react";
import User from "./User";
class About extends React?.Component {
  
  render() {
    let roles =[{
      name:'Mission',
      about: "Our mission is to elevate the quality of life of the urban consumer by offering unparalleled convenience. Convenience is what makes us tick. It’s what makes us get out of bed and say, “Let’s do this."
    },
  {
    name: 'Values',
    about : "Our actions are strongly defined by the Swiggy values. Through ups, downs, and everything in between; Swiggsters put these values into practice in their everyday ways of working. Read on to get a taste of how Swiggsters live and breathe these values and how it forms the backbone of our culture."
  }]
    return (
      <div>
        <h1 className=" font-bold text-2xl p-4 m-4 text-center">About Us</h1>

        <div className=" w-[70%] m-auto">
          Swiggy is an Indian online food ordering and delivery company. Founded
          in 2014, Swiggy is headquartered in Bangalore and operates in more
          than 580 Indian cities, as of July 2023. Besides food delivery, the
          platform also provides quick commerce services under the name Swiggy
          Instamart, and same-day package deliveries with Swiggy Genie. It
          rivals homegrown startup Zomato in food delivery and hyperlocal
          marketplace.
        </div>
        <User role = {roles}/>
      </div>
    );
  }
}
export default About;
