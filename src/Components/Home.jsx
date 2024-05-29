import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Home() {
  const [color, setColor] = useState('black');
  const [click,setClick] = useState(true);

  const handle =() => {
    if(click) setClick(false);
    else setClick(true);
  }

  useEffect(() => {
    if(click) setColor('black');
    else setColor('red-500');
  },[click])

  return (
    <div className={`bg-${color} w-full min-h-screen`}>
      <button className='border border-2-white text-white bg-black' onClick={handle}>
        change color
      </button>
    </div>
  )
}

export default Home