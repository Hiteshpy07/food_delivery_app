import React from 'react'
import { food_items } from './food'

const Foodcard = () => {
  return (
    <>
    {food_items.map((item)=>(
        <div className='bg-amber-950 flex'>
        <div className=' w-[100px] h-[100px] bg-amber-50 mb-3'>
            {item.id}
            {item.food_name}
        </div>
        </div>
        
    ))}
    </>
  )
}

export default Foodcard
