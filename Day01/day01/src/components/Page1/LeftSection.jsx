import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftSection = () => {
  return (
    <div className='w-1/3 h-full flex flex-col items-start justify-between'>
        <div className='flex flex-col px-4 gap-6'>
            <h2 className='text-6xl font-bold text-gray-800'>Prospective <span className='text-amber-500'>Customer</span> Segmentation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem error dolore repellat cumque quam? Velit et facilis recusandae quod temporibus?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, dolorum?
            </p>
        </div>
        <div>
            <RiArrowRightUpLine size={84}/>
        </div>
    </div>
  )
}

export default LeftSection