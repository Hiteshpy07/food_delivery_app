import React, { createContext } from 'react'
import { food_items } from './food';
export const dataContext=createContext()
const Context = ({children}) => {
    const [input, setinput] = React.useState("");
    const [food, setfood] = React.useState(food_items);
    const [cartopen, setcartopen] = React.useState(false);
    const [cartitem, setcartitem] = React.useState([]);
    const [quantity, setquantity] = React.useState(1);
    let data={
        input ,setinput,food,setfood ,cartopen , setcartopen,cartitem,setcartitem,quantity,setquantity
    }
  return (
    <div>
        <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider> 
    </div>
  )
}

export default Context
