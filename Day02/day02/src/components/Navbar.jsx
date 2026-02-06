import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Navbar>
            <h1 className='text-gray-400'>abc<span className='text-gray-950'>bank</span></h1>
            <div>
                <ul>
                    <li>Accounts</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button>Profile</button>
                <button>Get Demo</button>
            </div>
        </Navbar>
    </div>
  )
}

export default Navbar