import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        

<nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
     <Link to={'/girgitton'}> <span className="self-center text-2xl text-[#5B3A1D] font-bold whitespace-nowrap dark:text-white">Oshxona</span></Link>
  </a>
  <div className='flex gap-4'>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <Link to={'/check'}> <button type="button" className="text-white bg-[#5B3A1D] hover:bg-[#8B3A1D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buyurtmalar</button></Link>
  </div>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <Link to={'/login'}> <button type="button" className="text-white bg-[#C69C6D] hover:bg-[#8B3A1D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log in</button></Link>
  </div>
  </div>
  
  
  </div>
</nav>

    </div>
  )
}
