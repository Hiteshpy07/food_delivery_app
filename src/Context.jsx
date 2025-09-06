import React, { createContext } from 'react'
import { food_items } from './food';
export const dataContext=createContext()
const Context = ({children}) => {
    const [input, setinput] = React.useState("");
    const [food, setfood] = React.useState(food_items);
    const [cartopen, setcartopen] = React.useState(true);
    let data={
        input ,setinput,food,setfood ,cartopen , setcartopen
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
