import React from 'react'

const SideCard = (props) => {
    console.log(props.cardData)
  return (
    <div className='w-[20%] h-full rounded-3xl flex items-center justify-center' style={props.cardData ? {backgroundImage: `url(${props.cardData.imageUrl})`, backgroundSize: 'cover'} : {}}>
        <h1 className='text-gray-900 text-4xl font-medium p-4' style={{writingMode: 'vertical-rl'}}>{props.cardData?.title}</h1>
    </div>
  )
}

export default SideCard