import RestaurantCard from "./RestaurantCard";
import restDataListOfObj from "../utils/mockData"; 
import { useEffect, useState } from "react";
import restDataListOfObj from "../utils/mockData";

const Body = () => {

    //local state variable
    // const[listOfRestaurant ,useListOfRestaurant] = useState(
    //     [   {
    //                 "info": {
    //                 "id": "769451",
    //                 "name": "Pizza Hut",
    //                 "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    //                 "locality": "Kalikapur",
    //                 "areaName": "Kolkata",
    //                 "costForTwo": "₹350 for two",
    //                 "cuisines": [
    //                 "Pizzas"
    //                 ],
    //                 "avgRating": 3.3,        
    //              }
    //             },
    //             {
        
    //                 "info": {
    //                 "id": "769452",
    //                 "name": "Dominos",
    //                 "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    //                 "locality": "Kalikapur",
    //                 "areaName": "Kolkata",
    //                 "costForTwo": "₹350 for two",
    //                 "cuisines": [
    //                 "Pizzas"
    //                 ],
    //                 "avgRating": 4.5,        
    //              }
    //             },
    //             {
    //                 "info": {
    //                 "id": "769453",
    //                 "name": "KFC",
    //                 "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    //                 "locality": "Kalikapur",
    //                 "areaName": "Kolkata",
    //                 "costForTwo": "₹350 for two",
    //                 "cuisines": [
    //                 "Pizzas"
    //                 ],
    //                 "avgRating": 4.3,        
    //              }
    //             }  
    //     ]
    // )


    //normal js variable
    // let listOfRestaurant1 = [
    //     {
    //         "info": {
    //         "id": "769451",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    //         "locality": "Kalikapur",
    //         "areaName": "Kolkata",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //         "Pizzas"
    //         ],
    //         "avgRating": 3.3,        
    //      }
    //     },
    //     {

    //         "info": {
    //         "id": "769452",
    //         "name": "Dominos",
    //         "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    //         "locality": "Kalikapur",
    //         "areaName": "Kolkata",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //         "Pizzas"
    //         ],
    //         "avgRating": 4.5,        
    //      }
    //     },
    //     {
    //         "info": {
    //         "id": "769453",
    //         "name": "KFC",
    //         "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
    //         "locality": "Kalikapur",
    //         "areaName": "Kolkata",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //         "Pizzas"
    //         ],
    //         "avgRating": 4.3,        
    //      }
    //     }  

    //  ]

    const [listOfRestaurant , useListOfRestaurant] = useState(restDataListOfObj);

    useEffect(() => {
        // console.log("useEffect Called");
        fetchData()
    } , [])
    const fetchData = async() => {
             const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5802223&lng=88.5105955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

             const json = await data.json();

             console.log(json.data.cards[4].card.card.gridElements)
             useListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }
   //console.log("body will rendered first ? Let us see...")

    return (
        <div className="body">
            <div className="search">
                <button 
                 className="srch_btn"
                 onClick={ () => {
                    // console.log("Clicked")
                   const filteredListOfRestaurant = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
                   useListOfRestaurant(filteredListOfRestaurant);
                    console.log(filteredListOfRestaurant)
                 }}>
                 Top Rated Restaurant</button>
            </div>
            <div className="res-cont">
                  
                  {/* {restDataListOfObj.map((restaurant , key) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
                  ))
                  } */}
                  {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
                  ))
                  }

                    
            </div>
            
        </div>
    )
}

export default Body;