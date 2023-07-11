"use client"

import React, { useState } from 'react'

const Quantity = () => {
    const [num,setNum] = useState(1)
  return (
    <div className='flex gap-x-3 items-center'>
        <button className='border h-6 w-6 rounded-full center' onClick={()=>{setNum(num <= 1 ? 1: num - 1)}}>-</button>
        <span>{num}</span>
        <button className='border h-6 w-6 rounded-full center' onClick={()=>{ setNum(num + 1)}}>+</button>
    </div>
  )
}

export default Quantity