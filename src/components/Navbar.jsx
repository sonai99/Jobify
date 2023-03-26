import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav class="justify-center  pl-6">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <Link to="/" class="flex items-center ">
        <span class="self-center text-3xl font-semibold whitespace-nowrap hover:scale-125 duration-100 ">Jobify</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
        <li class="border-solid border-2 border-indigo-600 px-2 py-1 rounded-lg hover:bg-gray-50">
          <Link to="/" class="py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 " aria-current="page">Home</Link>
        </li>
        <li class="border-solid border-2 border-indigo-600 px-2 py-1 rounded-lg hover:bg-gray-50">
          <Link to="/jobs" class="py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Jobs</Link>
        </li>
        <li class="border-solid border-2 border-indigo-600 px-2 py-1 rounded-lg hover:bg-gray-50">
          <Link to="/candidates" class="py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Candidates</Link>
        </li>
      </ul>
    </div>
  </div>
  <hr />
</nav>
    </div>
  )
}

export default Navbar