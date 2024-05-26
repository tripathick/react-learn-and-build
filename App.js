import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Header
 *   -logo
 *   -NAv Items
 * Body
 *   -Search
 *   -Restaurant Container
 *     -restaurant card
 *       -img
 *       -Name of Res , star rating , cuisines,etc
 * Footer
 *   -copyright
 *   -Links
 *   -address
 *   -contact
 */
const HeaderComponent = () => {
   return (
    <div className="header">
        <div className="logo">
            <img className="logo-img" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
   )

};

// Restaurant card Container
const RestaurantCard = (props) => {
      const {restData} = props;

      const {cloudinaryImageId , name , cuisines , costForTwo,avgRating} = restData?.info;
  return (
        
        <div className="rest-card" style={{backgroundColor : "#f0f0f0"}}>
          
            {/* <img className="res-card-img" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  restData.info.cloudinaryImageId} alt="" />
            <h3>{restData.info.name}</h3>
            <h4>{restData.info.cuisines.join(",  ")}</h4>
           
            <h5>{restData.info.costForTwo} For Two</h5>
            <h6>{restData.info.avgRating}</h6> */}

            <img className="res-card-img" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
           
            <h5>{costForTwo} For Two</h5>
            <h6>{avgRating}</h6>
        </div>
  );
};


//Restaurant Data .....
const restDataListOfObj = [
  {
  "info": {
  "id": "769456",
  "name": "Pizza Hut",
  "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
  "locality": "Kalikapur",
  "areaName": "Kolkata",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Pizzas"
  ],
  "avgRating": 4.3,
  "parentId": "721",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 40,
  "lastMileTravel": 3,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "3.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-27 04:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Pizza.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Pizza.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/pizza-hut-kalikapur-kolkata-kolkata-769456",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "515520",
  "name": "UBQ BY Barbeque Nation",
  "cloudinaryImageId": "y11tivrx9dsgd6pllc5u",
  "locality": "Rajdanga Main Road",
  "areaName": "Acropolis Mall",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "North Indian",
  "Barbecue",
  "Biryani",
  "Kebabs",
  "Mughlai",
  "Desserts"
  ],
  "avgRating": 4.2,
  "parentId": "10804",
  "avgRatingString": "4.2",
  "totalRatingsString": "500+",
  "sla": {
  "deliveryTime": 36,
  "lastMileTravel": 1.2,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "1.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-27 00:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-rajdanga-main-road-acropolis-mall-kolkata-515520",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "515519",
  "name": "Barbeque Nation",
  "cloudinaryImageId": "bhmwsscavh0bfkuewxdm",
  "locality": "Kasba",
  "areaName": "Kasba",
  "costForTwo": "₹600 for two",
  "cuisines": [
  "North Indian",
  "Barbecue",
  "Biryani",
  "Kebabs",
  "Mughlai",
  "Desserts"
  ],
  "avgRating": 4.2,
  "parentId": "2438",
  "avgRatingString": "4.2",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 47,
  "lastMileTravel": 1.2,
  "serviceability": "SERVICEABLE",
  "slaString": "45-50 mins",
  "lastMileTravelString": "1.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-27 00:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/barbeque-nation-kasba-kolkata-515519",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "130766",
  "name": "Sharma Snacks   ",
  "cloudinaryImageId": "wvceefozypsni5qnltq0",
  "locality": "Kasba",
  "areaName": "Ruby Area",
  "costForTwo": "₹100 for two",
  "cuisines": [
  "Snacks",
  "Sweets",
  "Chaat"
  ],
  "avgRating": 4.4,
  "parentId": "491651",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 0.2,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "0.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-26 22:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹100 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/sharma-snacks-kasba-ruby-area-kolkata-130766",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "39309",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/76795500-8115-430e-8634-fa86dc2be090_39309.JPG",
  "locality": "Kasba",
  "areaName": "Kasba",
  "costForTwo": "₹450 for two",
  "cuisines": [
  "Burgers",
  "Fast Food",
  "Rolls & Wraps"
  ],
  "avgRating": 4.4,
  "parentId": "547",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 26,
  "lastMileTravel": 1.2,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "1.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-27 02:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/kfc-kasba-kolkata-39309",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "719437",
  "name": "McDonald's",
  "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
  "locality": "KASBA",
  "areaName": "Rajdanga road",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "American",
  "Fast Food"
  ],
  "avgRating": 4.5,
  "parentId": "630",
  "avgRatingString": "4.5",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 33,
  "lastMileTravel": 2.1,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "2.1 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-26 23:50:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "isNewlyOnboarded": true,
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/mcdonalds-kasba-rajdanga-road-kolkata-719437",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "397573",
  "name": "Wah! Puchka",
  "cloudinaryImageId": "ac843412ebf1569b194149e1b87ebfc6",
  "locality": "Howrah",
  "areaName": "Ruby Area",
  "costForTwo": "₹100 for two",
  "cuisines": [
  "Snacks",
  "Bihari",
  "Chaat",
  "Beverages"
  ],
  "avgRating": 4.6,
  "parentId": "484079",
  "avgRatingString": "4.6",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 31,
  "lastMileTravel": 2.4,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "2.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-26 23:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL",
  "discountCalloutInfo": {
  "message": "Free Delivery",
  "logoCtx": {
  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
  }
  }
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/wah-puchka-howrah-ruby-area-kolkata-397573",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "444357",
  "name": "Wah Thali - Meals & Combos",
  "cloudinaryImageId": "xc5bzfiuekzmwed3wznw",
  "locality": "Ruby Area",
  "areaName": "KASBA",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Chinese",
  "North Indian",
  "Thalis"
  ],
  "avgRating": 4.2,
  "parentId": "267460",
  "avgRatingString": "4.2",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 30,
  "lastMileTravel": 1.1,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "1.1 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-27 00:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "UPTO ₹100"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/wah-thali-meals-and-combos-ruby-area-kasba-kolkata-444357",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
  "info": {
  "id": "216675",
  "name": "Burger King",
  "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  "locality": "Kasba",
  "areaName": "East Kolkata Township",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Burgers",
  "American"
  ],
  "avgRating": 4.4,
  "parentId": "166",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 1.7,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "1.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-05-26 23:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Burger.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Burger.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
  "context": "seo-data-f3e9d5ac-9c32-4304-a1e6-8add110c90f8"
  },
  "cta": {
  "link": "https://www.swiggy.com/restaurants/burger-king-kasba-east-kolkata-township-kolkata-216675",
  "text": "RESTAURANT_MENU",
  "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
  ];

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-cont">
                    {/* <RestaurantCard resName ="Meghna" cuisine="Biryani, North Indian, Asian" rating= "4.5 stars" deliveryTime="45 min"/> */}
                  {/* <RestaurantCard restData={restDataListOfObj[0]}/>
                  <RestaurantCard restData={restDataListOfObj[1]}/> */}

                  {restDataListOfObj.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant}/>
                  ))
                  }
                  

                    
            </div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
           
           {HeaderComponent()}
           <Body/>
           
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
