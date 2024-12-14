import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
    const [query, setquery] = useState("");
    console.log(query);
  return (
    <div className='bg-green-900 w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
      <i class="text-zinc-300 text-2xl ri-search-line"></i>
      <input onChange={(e)=>setquery(e.target.value)} value={query} className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='search anything'/>
      {query.length > 0 && (<i onClick={()=>setquery("")} class="text-zinc-400 text-2xl ri-close-fill"></i>)}
      {query.length > 0 && (<div className='absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-y-auto'>
        <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-7 flex justify-start items-center border-b-2 border-zinc-100'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
        </Link>
        <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-7 flex justify-start items-center border-b-2 border-zinc-100'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
        </Link>
      </div>)}
    </div>
  )
}

export default Topnav
