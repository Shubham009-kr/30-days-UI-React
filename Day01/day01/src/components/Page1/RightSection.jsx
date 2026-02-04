import React from 'react'
import RightCard from './RightCard'

const RightSection = (props) => {
  return (
    <div className='w-2/3 h-full gap-4  flex items-center justify-center'>
      {props.users.map(function(element, idx){
        return <RightCard key={idx} id={idx} img={element.img} intro={element.intro} tag={element.tag}/>
      })}
    </div>
  )
}

export default RightSection