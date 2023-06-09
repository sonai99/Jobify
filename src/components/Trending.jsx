import React from 'react'

const Trending = () => {
  return (
    <>
    <section class="bg-white ">
  <div class="py-4 px-4 mx-auto max-w-screen-xl items-center lg:py-16 lg:px-6 ">
  <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
  <a href="/jobs" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-yellow-700 bg-gray-100 rounded-full  hover:bg-gray-200 " role="alert">
            <span class="text-xs bg-primary-600 rounded-full text-blue-700 px-4 py-1.5 mr-3">New</span> <span class="text-sm text-blue-900 font-medium">Checkout the trending jobs</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
      </div> 
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-300 rounded-lg shadow sm:flex ">

              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900">
                      <a href="jobs">Microsoft</a>
                  </h3>
                  <span class="text-gray-500 ">Frontend Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">Posted 1d Ago · USA</p>
                  <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
       Apply
    </button>
    <a href="jobs" class="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
       Refer a Friend
    </a>
              </div>
          </div> 
          <div class="items-center bg-gray-300 rounded-lg shadow sm:flex ">

              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                      <a href="/">Amazon</a>
                  </h3>
                  <span class="text-gray-500 ">Backend Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">Posted 1d Ago · USA</p>
                  <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
       Apply
    </button>
    <a href="jobs" class="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
       Refer a Friend
    </a>
              </div>
          </div> 
          <div class="items-center bg-gray-300 rounded-lg shadow sm:flex ">

              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                      <a href="/jobs">Meta</a>
                  </h3>
                  <span class="text-gray-500 ">Senior Front-end Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">Posted 1d Ago · USA</p>
                  <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
       Apply
    </button>
    <a href="jobs" class="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
       Refer a Friend
    </a>
              </div>
          </div> 
          <div class="items-center bg-gray-300 rounded-lg shadow sm:flex ">

              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
                      <a href="/jobs">Google</a>
                  </h3>
                  <span class="text-gray-500 ">Marketing & Sale</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 ">Posted 1d Ago · USA</p>
                  <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  ">
       Apply
    </button>
    <a href="jobs" class="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
       Refer a Friend
    </a>
              </div>
          </div>  
      </div>  
  </div>
</section>
<div class="w-3/4 mx-auto border-b-2 border-gray-200"></div>
    </>
  )
}

export default Trending