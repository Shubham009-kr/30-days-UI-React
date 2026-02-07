import React from 'react'
import { Plus, Calendar1, WalletMinimal} from 'lucide-react'

const MainCard = () => {
  return (
    <div className='bg-amber-200 w-[60%] h-full rounded-4xl px-8 bg-[url(https://plus.unsplash.com/premium_photo-1661478142023-c06380c4013c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover'>
        <h1 className='text-4xl py-8'>Personal</h1>
        <p className='leading-5'>The all-in-one plan for banking, saving, <br/> investing, and travel. Home or away, <br/> local or global - move freely between <br /> countries and currencies.</p>
        <div className='w-75 h-40 bg-amber-200 rounded-3xl mt-4 grid grid-cols-3 grid-rows-2 gap-4 px-4 py-4'>
            <h1 className='bg-white w-12 h-12 flex items-center justify-center rounded-full'><Plus /></h1>
            <h1 className='bg-white w-12 h-12 flex items-center justify-center rounded-full'><Calendar1 /></h1>
            <h1 className='bg-white w-12 h-12 flex items-center justify-center rounded-full'><WalletMinimal /></h1>
            <h1 className='col-span-2 text-sm'>Get started with a free account</h1>
            <h1 className='text-sm'>See all features</h1>
        </div>
    </div>
  )
}

export default MainCard