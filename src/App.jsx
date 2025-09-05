import { useState } from 'react'

import Navbar from './Navbar'
import Category from './Category'
import Foodcard from './Foodcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-500 w-full h-full '>
  <Navbar/>
  <Category/>
  <Foodcard/>
   </div>
  )
}

export default App
