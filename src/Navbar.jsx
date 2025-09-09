import React from 'react'
import { IoFastFoodSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useContext } from 'react';
import {dataContext} from './Context';

const Navbar = () => {
  let {input,setinput,food,setfood,cartopen,setcartopen,cartitem}=useContext(dataContext)
  // console.log(input)
  return (
     
    <div className='flex'>
    <IoFastFoodSharp  className='text-3xl bg-amber-50  w-[50px]  h-[50px]   p-1 rounded-3xl m-3 hover:bg-slate-300'/>
    
    <input onChange={(e)=>setinput(e.target.value)} type='search' className=' bg-amber-50 h-[30px] w-[400px] m-3 rounded ml-[600px] decoration-0 p-[10px] outline-none text-sm' placeholder='What do you want to eat?'>
    </input>
     <FaLocationDot className='text-3xl bg-amber-50  w-[50px]  [h-50px]   p-1 rounded-3xl m-3 ml-10 hover:bg-slate-300' />
     <MdAccountCircle className='text-3xl bg-amber-50  w-[50px]  [h-50px]   p-1 rounded-3xl m-3 hover:bg-slate-300'/>
     <div className='relative'>
      <span className='absolute left-13 top-1 text-lg  font-semibold  bg-slate-900 text-amber-50 rounded-3xl h-[20px] w-[20px] flex justify-center items-center'>{cartitem.length}</span>
     <IoBagHandleSharp className='text-3xl bg-amber-50  w-[50px]  [h-50px]   p-1 rounded-3xl m-3 hover:bg-slate-300 cursor-pointer' onClick={()=>setcartopen(true)} />
     </div>
    </div>
   
  )
}

export default Navbar
