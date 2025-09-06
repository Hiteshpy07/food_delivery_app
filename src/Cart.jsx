import React from 'react'
import image1 from './assets/image1.avif'
import { LiaRupeeSignSolid } from "react-icons/lia";
const Cart = () => {
  return (
    <>
    <div className='bg-slate-100 w-[full] h-[100px] mt-2 shadow-xl rounded-lg flex '>
        <img src={image1}  className='w-[25%] h-[80%] mt-[2%] ml-2 rounded-lg'/>

        <div className='flex justify-between  w-[75%] h-[30px] mt-[2%] m-2'>
        <span className='text-lg font-semibold ml-2'>PanCake</span>
        <span className='text-md font-semibold mr-2 flex items-center'><LiaRupeeSignSolid className='text-md font-semibold'/><p>299</p></span>
        </div>
        
    </div>
    
    </>
  )
}

export default Cart
