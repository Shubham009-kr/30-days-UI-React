import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Page1 = (props) => {
  return (
    <div className='w-full h-[92vh] px-24 py-12 flex '>
        <LeftSection />
        <RightSection users = {props.users}/>
    </div>
  )
}

export default Page1