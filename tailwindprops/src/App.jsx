import React, { useState } from 'react'
import Card from './card'
const App = () => {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'BHaskar',
    age: 21
  }
  let newArr = [2,3,5,5]
  return (
    <div>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'  >
    Hello world!
    < Card channel="Hi"  obje={myObj} new={newArr} />

  </h1>
    </div>
  )
}

export default App 