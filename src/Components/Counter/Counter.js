"use client"
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className='text-2xl'>Count : {count}</h1>
            <button className='p-2 border bg-green-500 text-white mr-5'onClick={()=> setCount(count+ 1)}>Increase</button>
            <button className='p-2 border bg-red-500 text-white' onClick={()=> setCount(count- 1)}>Decrease</button>
        </div>
    );
};

export default Counter;