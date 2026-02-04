import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[8vh] flex items-center justify-between px-4 text-white'>
        <div className=''>
            <h4 className='uppercase bg-gray-800 px-6 py-2 rounded-full'>Logo</h4>
        </div>
        <div className='flex items-center'>
            <ul className='flex items-center space-x-6 px-6 py-2 rounded-full text-black bg-gray-200'>
                <li className='hover:text-amber-300 cursor-pointer'>Home</li>
                <li className='hover:text-amber-300 cursor-pointer'>About</li>
                <li className='hover:text-amber-300 cursor-pointer'>Services</li>
                <li className='hover:text-amber-300 cursor-pointer'>Contact</li>
            </ul>
            <button className='bg-amber-500 px-6 py-2 rounded-full hover:bg-amber-600'>Explore</button>
        </div>

    </div>
  )
}

export default Navbar