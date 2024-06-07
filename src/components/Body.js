import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

     const [listOfRestaurant , setListOfRestaurant] = useState([]);
     const [searchText , setSearchText] = useState("");
     const [filteredRestaurant , setFilteredRestaurant] = useState([]);
    //  Whenever state variable updates,react triggers a reconcillation cycle(re-renders the component )
     console.log("body Renderd")

    useEffect(() => {
        // console.log("useEffect Called");
        fetchData()
    } , []);


    const fetchData = async() => {
             const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5802223&lng=88.5105955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

             const json = await data.json();

            console.log(json.data.cards[3].card.card.gridElements)
            setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }
    // if(listOfRestaurant.length === 0){
    //     // return <h1>Loading</h1>
    //     return <Shimmer/>
    // }

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                      type="text"
                      className="search-box"
                      value={searchText} 
                      onChange={(e) => {
                         setSearchText(e.target.value);
                      }}  
                      />
                    <button className="srch-btn" onClick={() => {
                        // Filter the restaurant card and update the UI
                        // searchText
                        console.log(searchText)
                        const filteredRestaurant = listOfRestaurant.filter((res) =>
                          res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                          // setListOfRestaurant(filteredRestaurant);
                          setFilteredRestaurant(filteredRestaurant);
                    }}>search</button> 
                </div>
                <button 
                 className="filter_btn"
                 onClick={ () => {
                    // console.log("Clicked")
                   const filteredListOfRestaurant = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
                   setListOfRestaurant(filteredListOfRestaurant);
                    console.log(filteredListOfRestaurant)
                 }}>
                 Top Rated Restaurant</button>
            </div>
            <div className="res-cont">
                  
                  {/* {restDataListOfObj.map((restaurant , key) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
                  ))
                  } */}
                  {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
                  ))
                  }

                    
            </div>
            
        </div>
    )
}

export default Body;