import React from 'react'
import { ArrowRight } from 'lucide-react'

const TopCTA = () => {
  return (
    <div className='w-1/3'>
        <h1 className='text-lg'>Get business banking, card, bill pay, travel, and reimbrusements- all in one scalable solution.</h1>
        <button className='px-1 py-1 bg-gray-950 text-white rounded-full mt-4 flex justify-between items-center pl-4 w-[50%]'>Get Started 
            <div className='bg-white text-gray-950 rounded-full py-2 px-4'><ArrowRight /></div>
        </button>
    </div>
  )
}

export default TopCTA