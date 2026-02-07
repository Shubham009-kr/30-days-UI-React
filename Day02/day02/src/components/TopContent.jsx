import React from 'react'
import TopDescription from './TopDescription'
import TopCTA from './TopCTA'

const TopContent = () => {
  return (
    <div className='flex items-center justify-between px-16 py-12'>
        <TopDescription />
        <TopCTA />
    </div>
  )
}

export default TopContent