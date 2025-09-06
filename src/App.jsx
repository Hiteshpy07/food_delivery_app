import { useState } from 'react'

import Navbar from './Navbar'
import Category from './Category'
import Foodcard from './Foodcard'
import { RxCross1 } from "react-icons/rx";
import { useContext } from 'react';
import {dataContext} from './Context';
import Cart from './Cart';


function App() {

  let {cartopen,setcartopen}=useContext(dataContext)

  return (
    <div className='bg-slate-500 w-full h-full  '>
  <Navbar/>
  <Category/>
  <Foodcard/>
  <div className={` w-[70vh] ${cartopen?"translate-x-0":"translate-x-full"} h-[100%] bg-amber-50 fixed top-0 right-0 shadow-xl p-2 rounded-lg transition duration-150`}>
    {/* this is for the cart... */}
    <div className='flex justify-between '>
    <span className='text-xl mt-1 ml-2 font-semibold'>Order items</span>
    <span className='cursor-pointer font-bold text-xl mt-2 mr-2 ' onClick={()=>setcartopen(false)}><RxCross1 /></span>
    </div>
    <Cart/>
  </div>
   </div>

  )
}
export default App
