import React from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'

function Home() {
  document.title = "HomePage🏠"
  return (
    <div className='w-full h-full flex bg-zinc-800'>
        <Sidenav />
        <div className='w-[75%] h-full bg-red-900'>
          <Topnav />
        </div>
    </div>
  )
}

export default Home
