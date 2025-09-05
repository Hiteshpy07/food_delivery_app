import React from 'react'
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { useContext } from 'react';
import {dataContext} from './Context';



 const Categories = [
{
    id:1,
    name:"All",
    icon:<TiThSmallOutline className="w-[60px] h-[60px] ml-[25%] mt-[15%] text-2xl "/>,
},
{
    id:2,
    name:"breakfast",
    icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px]  ml-[25%] mt-[15%] text-2xl"/>,
},
{
    id:3,
    name:"soups",
    icon:<TbSoup className="w-[60px] h-[60px]  ml-[25%] mt-[15%] text-2xl"/>,
},
{
    id:4,
    name:"pasta",
    icon:<CiBowlNoodles className="w-[60px] h-[60px] ml-[25%] mt-[15%] text-2xl"/>,
},
{
    id:5,
    name:"main_course",
    icon:<MdOutlineFoodBank className="w-[60px] h-[60px] ml-[25%] mt-[15%] text-2xl "/>,
},
{
    id:6,
    name:"pizza",
    icon:<GiFullPizza className="w-[60px] h-[60px] ml-[25%] mt-[15%] text-2xl "/>,
},
{
    id:7,
    name:"burger",
    icon:<GiHamburger className="w-[60px] h-[60px]  ml-[25%] mt-[15%] text-2xl"/>,
},

]



const Category = () => {
    let {input ,setinput}=useContext(dataContext)
  return (
    <div className={`flex gap-15 ml-20 ${!input?"block":"hidden"}`}>
        {Categories.map((item,index)=>(
            <div key={index} className="bg-amber-50 w-[125px] h-[125px] mt-18 rounded-2xl transform transition-transform duration-200 hover:scale-105 shadow-xl ">
                <div>{item.icon}</div>
                <div className='font-semibold flex justify-center mt-2'>{item.name}</div>


                </div>
        ))}

    </div>
  )
}

export default Category

