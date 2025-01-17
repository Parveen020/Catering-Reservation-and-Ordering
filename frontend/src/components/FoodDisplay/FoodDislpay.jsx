import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDislpay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className="foodDisplay" id="foodDisplay">
      <h2>Top dishes near you</h2>
      <div className='foodDisplay-list'>
        {food_list.map((item,index) => {
            if(category ==="All"|| category ===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default FoodDislpay
