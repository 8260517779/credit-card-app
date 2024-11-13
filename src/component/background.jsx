import React from 'react'
import bgMobile from '../images/bg-main-mobile.png'
import bgDesktop from '../images/bg-main-desktop.png'
export default function Background() {
  return (
    <div >
      <picture>
      <source media='(min-width: 1024px)' srcSet={bgDesktop}/>
      <img src={bgMobile}  alt='' className="w-full  md:w-1/3" />
      </picture>
    </div>
  )
}
