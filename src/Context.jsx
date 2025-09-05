import React, { createContext } from 'react'
import { food_items } from './food';
export const dataContext=createContext()
const Context = ({children}) => {
    const [input, setinput] = React.useState("");
    const [food, setfood] = React.useState(food_items);
    let data={
        input ,setinput,food,setfood
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
