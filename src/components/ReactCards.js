import { REST_LOGO } from "../utils/constants";

const RestCards =(prop)=>{
    const {restData} = prop;
    const { name , cuisines, avgRating, costForTwo,cloudinaryImageId, sla}= restData;
    return(
            <div className="rest-cards" style={{backgroundColor:"#f0f0f0"}}>
                <div className="rest-logo">
                    <img src={`${REST_LOGO}${restData?.info?.cloudinaryImageId}` }alt="rest-logo" />
                </div>
                <h3 className="rest-name margin-bottom">{restData?.info?.name}</h3>
                <h4 className="rest-food-items margin-bottom">{restData?.info?.cuisines?.join(", ")}</h4>
                <h4 className="rest-time margin-bottom">{restData?.info?.avgRating} stars</h4>
                <h4 className="rest-rating margin-bottom">{restData?.info?.costForTwo}</h4>
                <h4 className="rest-time margin-bottom">{restData?.info?.sla?.deliveryTime} mins</h4>
            </div>
        
    )

}

export default RestCards