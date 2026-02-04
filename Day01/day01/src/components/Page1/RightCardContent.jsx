import React from 'react'
import { RiArrowRightLine } from '@remixicon/react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='flex items-center justify-center w-10 h-10 bg-white rounded-full'>{props.id + 1}</h2>
            <div>
                <p className='text-white leading-5 mb-12'>{props.intro}</p>
                <div className='flex mt-4'>
                    <button className='bg-blue-500 hover:bg-amber-500 font-semibold px-8 py-1 rounded-full text-white'>{props.tag}</button>
                    <button className='bg-blue-500 font-semibold px-2 py-2 rounded-full text-white'><RiArrowRightLine size={16}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent