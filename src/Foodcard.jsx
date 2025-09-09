import React, { use, useEffect } from 'react'
import { food_items } from './food'
// import { IoIosRadioButtonOn } from "react-icons/io";
// import image1 from "./assets/image1.avif";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useContext } from 'react';
import {dataContext} from './Context';



const Foodcard = () => { 

  let {input ,setinput,food,setfood,cartitem,setcartitem}=useContext(dataContext)
  console.log("hello from food",input)
  useEffect(()=>{
    let newlist=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input) )
    setfood(newlist)
  }
  ,[input])
  
  const addToCart = (item) => {
    setcartitem(prev => [...prev, item]);
    console.log(cartitem)
  };


  return (
  <div className='flex flex-wrap overflow-auto justify-around '>
    {food.map((items,index) =>(
      
    <div key={items.id} className='bg-amber-50 rounded-lg  w-[240px] h-[300px] p-3 shadow-xl  m-5 ml-3 mr-3 transform transition-transform duration-200 hover:shadow-xl hover:scale-102 '>

    <div className='flex justify-center items-center w-[100%] mt-2'><img src={items.food_image} alt="My Image" className='w-[200px] h-[170px] rounded-lg  '/></div>
    <div className='flex items-center'>
    <div className='font-serif text-[20px] w-[100%] flex justify-center  mt-2 m-1'>{items.food_name}</div>
    
    </div>
    <div className='flex items-center'>
    <div className='flex   justify-center items-center font-semibold '><LiaRupeeSignSolid/><p>{items.price}</p></div>
    {/* <div className=' ml-30 bg-green-600 text-amber-50 text-[10px] p-1 rounded-md font-semibold'>{items.food_type}</div> */}
    <div
  className={`ml-30 text-[10px] px-1 py-0.5 rounded-md font-semibold
    ${items.food_type === "veg" ? "bg-green-600 text-amber-50" : ""}
    ${items.food_type === "non_veg" ? "bg-red-600 text-white" : ""}
  `}
>
  {items.food_type}
</div>
    </div>

  <button type='button'  className=' bg-slate-800 w-[85%] rounded-lg ml-[7%] mt-2 h-[30px] text-amber-50 hover:bg-slate-600 transform transition-transform duration-200 hover:scale-105' onClick={
    // console.log(items)
    // console.log("this is added in the cart")
    // // setcartitem(prev => [...prev, items.id])
    // setcartitem({items})
    // console.log(cartitem)
    () => addToCart({ id: items.id, name: items.food_name, image:items.food_image,price:items.price })
  }>Add</button>

    </div>
    ))}
    
    </div>
  )
}

export default Foodcard
