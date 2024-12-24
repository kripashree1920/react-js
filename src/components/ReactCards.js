import { REST_LOGO } from "../utils/constants";

const RestCards =(prop)=>{
    const {restData} = prop;
    
    return(
            <div className="m-4 p-4 w-[250px]  hover:border hover:border-red-900 cursor-pointer" style={{backgroundColor:"#f0f0f0"}}>
                <div className="rest-logo mb-2">
                    <img src={`${REST_LOGO}${restData?.info?.cloudinaryImageId}` }alt="rest-logo" />
                </div>
                <h3 className="text-red-800 font-bold py-4 text-lg">{restData?.info?.name}</h3>
                <h4 className="text-red-800">{restData?.info?.cuisines?.join(", ")}</h4>
                <h4 className="text-red-800">{restData?.info?.avgRating} stars</h4>
                <h4 className="text-red-800">{restData?.info?.costForTwo}</h4>
                <h4 className="text-red-800">{restData?.info?.sla?.deliveryTime} mins</h4>
            </div>
        
    )

}

export const WithPromotedCard = (restuarant)=>{
    return(props)=>{
        return (
            <div>
                <label htmlFor="">Promoted</label>
                <RestCards {...props}/>
            </div>
        )
    }
}

export default RestCards