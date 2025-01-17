import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="ExploreMenu" id="ExploreMenu">
      <h1>Explore our Menu</h1>
      <p className="ExploreMenu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and a passion for flavor, bringing you a memorable dining experience with every bite.</p>
      <div className="ExploreMenu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick = {()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} classkey={index} className="ExploreMenu-list-item">
                <img className={category === item.menu_name?"active":""} src={item.menu_image} alt=""/>
                <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
