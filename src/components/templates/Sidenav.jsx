import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[25%] h-full p-5 border-r-2 border-zinc-200'>
      <h2>
        <i className='text-[#6556CD] ri-tv-fill mr-2 text-xl'></i><span className='text-lg font-bold text-white'>My Cinema</span>
      </h2>
      <nav className='flex flex-col gap-5 text-zinc-400 mb-5'>
        <h2 className='text-lg my-5 mt-7 mb-2 font-semibold text-white'>New Feeds</h2>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-fire-fill"></i>&nbsp;&nbsp;Trending</Link>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-star-s-fill"></i>&nbsp;&nbsp;Top Rated</Link>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-movie-2-fill"></i>&nbsp;&nbsp;Movies</Link>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-tv-2-fill"></i>&nbsp;&nbsp;TV Shows</Link>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-user-fill"></i>&nbsp;&nbsp;Artist</Link>
      </nav>
      <hr />
      <nav className='flex flex-col gap-5 text-zinc-400'>
        <h2 className='text-lg my-5 mt-7 mb-2 font-semibold text-white'>Website Information</h2>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-information-fill"></i>&nbsp;&nbsp;About Us</Link>
        <Link className='hover:text-lg hover:text-white hover:bg-[#6556CD] px-5 py-2 hover:font-semibold duration-300 rounded-xl'><i class="ri-phone-fill"></i>&nbsp;&nbsp;Contact Us</Link>
      </nav>
    </div>
  )
}

export default Sidenav
