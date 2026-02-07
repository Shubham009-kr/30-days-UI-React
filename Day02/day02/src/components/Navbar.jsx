import React from 'react'
import { UserRound, PiggyBank } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center p-4'>
            <h1 className='text-gray-400 text-2xl flex items-center gap-1'><PiggyBank />abc<span className='text-gray-950'>bank</span></h1>
            <div>
                <ul className='flex items-center justify-center gap-4'>
                    <li>Accounts</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex items-center justify-end gap-4'>
                <button className='flex px-4 py-2 border-1 rounded-full'><UserRound size={20}/></button>
                <button className='flex px-4 py-2 border-1 rounded-full text-sm'>Get Demo</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar