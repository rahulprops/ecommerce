import React from 'react'
import HomeCarosel from '../components/HomeCarosel'
import HomeSectionCard from '../components/HomeSectionCard'
import HomeSectionCarousel from '../components/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
        <HomeCarosel/>
        <div className=' mx-2 border-b-1 border-slate-300 py-2  md:mx-7 text-3xl  font-medium font-serif text-slate-800 uppercase my-5'>men </div>
        <HomeSectionCarousel/>
        <div className=' mx-2 border-b-1 border-slate-300 py-2  md:mx-7 text-3xl  font-medium font-serif text-slate-800 uppercase my-5'>women</div>
        <HomeSectionCarousel/>
    </div>
  )
}

export default HomePage