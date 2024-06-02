import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restData} = props;

    const {cloudinaryImageId , name , cuisines , costForTwo,avgRating} = restData?.info;
return (
      
      <div className="rest-card" style={{backgroundColor : "#f0f0f0"}}>
          <img className="res-card-img" 
          src={CDN_URL + cloudinaryImageId} alt="" />
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
         
          <h5>{costForTwo} For Two</h5>
          <h6>{avgRating}</h6>
      </div>
);
};

export default RestaurantCard;