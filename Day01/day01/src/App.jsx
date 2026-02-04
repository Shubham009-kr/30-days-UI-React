import React from 'react'
import Page1 from './components/Page1/Page1'
import Navbar from './components/Navbar'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1603256648949-0a4bd9a357a7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus minus asperiores distinctio fugit ad? Dsas sdahk sdh tehm.', 
      tag: 'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1615486494361-2f2f87855f49?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus minus asperiores distinctio fugit ad?', 
      tag: 'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus  distinctio fugit ad?', 
      tag: 'Underbanked'
    },
  ]
  return (
    <div>
      <Navbar />
      <Page1 users={users}/>
    </div>
  )
}

export default App