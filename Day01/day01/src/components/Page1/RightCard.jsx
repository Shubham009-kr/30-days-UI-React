
import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-1/3 bg-red-300 rounded-4xl relative overflow-hidden'>
        <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="" />
        <RightCardContent id={props.id} intro={props.intro} tag={props.tag}/>
    </div>
    
  )
}

export default RightCard