import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";


const Body = () => {
 
    const [listOfRestaurents , setListOfRestaurents] = useState(resList)

    return(
        <div className="Body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                  const filteredList = listOfRestaurents.filter(
                    (res) => res.info.avgRating > 4.2
                  )   
                  setListOfRestaurents(filteredList)
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurents.map ((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
               
            </div>
        </div>
    )
}

export default Body;