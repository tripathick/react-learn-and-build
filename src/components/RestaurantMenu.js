import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo , setResInfo] = useState(null);

    // const params = useParams();
    const { resId } = useParams();

    // console.log(params)

    useEffect(() => {
        fetchMenu();
        } , [])

    const fetchMenu = async() =>{
        // const data = await fetch(
        //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.56885444662564&lng=88.51079219374694&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER"

        // );
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />
    const {name,cuisines=[],costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    console.log(itemCards)
    return(
        <div className="rest-menu">
            <h1>{name}</h1>
            {/* <h2>{cuisines.join(",")}</h2> */}
            <h2>{Array.isArray(cuisines) ? cuisines.join(", ") : ''}</h2>

            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
               {itemCards && itemCards.length > 0 ? (itemCards.map((item) =>(
                <li key={item.card.info.id}>
                    {item.card.info.name}
                   <p style={{color: 'red' , fontSize:'12px'}}>{item.card.info.description}</p> 
                   <h6 style={{color: 'green'}}>Price : Rs.{item.card.info.defaultPrice}</h6>
                </li>
               ))) : (
                 <h1> Sorry!! No Item Available😢</h1>
               )}    
            </ul>
        </div>
    )
}
export default RestaurantMenu;