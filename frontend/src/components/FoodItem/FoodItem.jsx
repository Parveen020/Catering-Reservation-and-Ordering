import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItem,addtoCart,removeFromCart,url} = useContext(StoreContext);
  
  return (
    <div className="FoodItem">
      <div className="FoodItem-image-container">
        <img className="FoodItem-image" src={url+"/images/"+image} alt=""/>
        {!cartItem[id] 
            ?<img className='add' onClick={()=>addtoCart(id)} src={assets.add_icon_white} alt=""/>
            :<div className="FoodItem-counter">
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
              <p>{cartItem[id]}</p>
              <img onClick={()=>addtoCart(id)} src = {assets.add_icon_green} alt=""/>
            </div>
        }
      </div>
      <div className="FoodItem-info">
        <div className="FoodItem-name-rating">
            <p>{name}</p>
            <img src = {assets.rating_starts} alt=""/>
        </div>
        <p className="FoodItem-description">{description}</p>
        <p className="FoodItem-price">${price}</p>

      </div>
    </div>
  )
}

export default FoodItem
