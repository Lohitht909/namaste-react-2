import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
 
    const [listOfRestaurents , setListOfRestaurents] = useState([])
    const [filteredRestaurant,setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")

useEffect(() => {
    fetchData()
} , []);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();

    console.log(json)
    setListOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
//conditional rendering 

// if(listOfRestaurents.length === 0){
//     return( 
//         <Shimmer/>
//     )
// }

    return listOfRestaurents.length === 0 ? (<Shimmer/>) : (
        <div className="Body">
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
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}>search</button>
                </div>


                <button className="filter-btn" onClick={() => {
                  const filteredList = listOfRestaurents.filter(
                    (res) => res.info.avgRating > 4.2
                  )   
                  setListOfRestaurents(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map ((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
               
            </div>
        </div>
    )
}

export default Body;