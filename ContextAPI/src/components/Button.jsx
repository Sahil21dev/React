import React from 'react'
import { CounterContext } from '../context/CounterContext'
import { useContext } from 'react'

const Button = () => {
    const countContext = useContext(CounterContext);
  return (
    <div className='flex gap-2'>
      <button onClick={() => countContext.setCount(countContext.count + 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
      <button onClick={() => countContext.setCount(countContext.count - 1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Decrement</button>
    </div>
  )
}

export default Button
