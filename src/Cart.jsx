import React from 'react'
import image1 from './assets/image1.avif'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from 'react';
import {dataContext} from './Context';



const Cart = ({name,image,price}) => {
   let {quantity,setquantity,food, setfood}=useContext(dataContext)
function decreseq(){
  if(quantity>0){setquantity(prev => prev-1)}
   
}
function increseq(){
  setquantity(prev => prev + 1)
}

  return (
    <>
    <div className='bg-slate-100 w-[full] h-[100px] mt-2 shadow-xl rounded-lg flex '>
      <div className='w-[30%] h-full flex items-center'>
        <img src={image}  className='w-[90%] h-[80%] mt-[2%] ml-2 rounded-lg'/>

</div>
<div className='w-[70%] h-full '>
        <div className='flex justify-between  w-[100%] h-[30px] mt-[2%]  '>
          {/* first div */}
        <span className='text-lg font-semibold ml-2'>{name}</span>
        <span className='text-md font-semibold   mr-2 flex items-center'><LiaRupeeSignSolid className='text-md font-semibold'/><p>{price}</p></span>
        </div>
        <div className='flex justify-between'>
          {/* 2nd div */}
          <div className='bg-white w-[30%] flex justify-center items-center gap-3 border-slate-500 border-2 rounded-lg '>
            {/* quantity wla div  */}
            <span className='bg-slate-300 w-[30px] h-[20px] ml-2 rounded-3xl cursor-pointer flex justify-center items-center hover:bg-slate-400 ' onClick={decreseq}><HiOutlineMinus /></span>
            <span>{quantity}</span>
            <span className='bg-slate-300 w-[30px] h-[20px] mr-2 rounded-3xl cursor-pointer flex justify-center items-center hover:bg-slate-400' onClick={increseq}><GoPlus /></span>
            
          </div>
          <RiDeleteBin6Line className='mt-2 mr-3 text-lg text-red-500 cursor-pointer'/>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Cart
