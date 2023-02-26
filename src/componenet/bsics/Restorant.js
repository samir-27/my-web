import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuapi.js";
import MenuCard from '../MenuCard';
const Restorant = () => {
    const[menuData, setMenuData]=useState(Menu);
 
const filterItem = (catagory) => {
  const updatedList = Menu.filter((curElem)=>{
            return curElem.category === catagory
  })
  setMenuData(updatedList)
}

  return (
      <>
      <nav className='navbar'>
        <div className="btn-group">
          <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Break fast</button>
          <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
          <button className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
          <button className='btn-group__item'onClick={()=>filterItem("dinner")}>Dinner</button>
          <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button>
        </div>
      </nav>
       < MenuCard menuData={menuData}/>
      </>
      )
}

export default Restorant
