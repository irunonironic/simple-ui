import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Products from './Products'
import SkincareTips from './SkincareTips'
import About from './About'
import SignUp from './SignUp'
const HeadMain = () => {
  return (
    <header className="w-full bg-white shadow-sm">
   <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 py-3">
        
    <div className='flex item-center gap-2 px-8'>
      <Logo />
      <Products />
       <SkincareTips />
       <About />
       </div>
       <div className='flex items-center gap-3 px-2'>
         <SignUp />
      <Search />
      </div>

    </div>
    </header>
  )
}

export default HeadMain
