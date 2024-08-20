import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    // const [resInfo , setResInfo] = useState(null);

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    //     } , [])

    // const fetchMenu = async() =>{    
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // }

    if(resInfo === null) return <Shimmer />
    const {name,cuisines=[],costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};

    console.log(itemCards)
    return(
        <div className="rest-menu">
            <h1>{name}</h1>
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