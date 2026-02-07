import React from 'react'
import MainCard from './MainCard'
import SideCard from './SideCard'

const BottomContent = () => {
  const  CardContent = [{
    title: 'Business',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1675014768031-7bf2773a0b75?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Travel',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1673812292289-4def255cf64b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }]
  return (
    <div className='w-full h-[55vh] px-16 flex items-center justify-between gap-10'>
        <MainCard />
        <SideCard cardData={CardContent[0]} />
        <SideCard cardData={CardContent[1]} />
    </div>
  )
}

export default BottomContent