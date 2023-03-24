import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';

const JobTest = ({job}) => {

  return (

/* <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg drop-shadow-lg">
<a>
  
        <h1 class="mb text-2xl font-medium tracking-tight text-gray-800">{job.company}</h1>
        <p class="mb text-base font-medium tracking-tight text-gray-800">{job.position}</p>
    
    <p class="font-normal text-gray-900 ">{job.role} • {job.location}</p>
    <p class="mb-2 font-normal text-gray-900">Posted {job.postedAt}</p>
    </a>
    <button onClick={notify} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Apply
    </button>
    <a class="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Refer a Friend
    </a>
</div> */

<div>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mt-2 dark:bg-gray-800 dark:border-gray-700">
<a href="/jobs">
  
  <h1 class="mb text-2xl font-medium tracking-tight text-white">{job.company}</h1>
  <p class="mb text-base font-medium tracking-tight text-white">{job.position}</p>

<p class="font-normal text-white ">{job.role} • {job.location}</p>
<p class="mb-2 font-normal text-white">Posted {job.postedAt}</p>
</a>
<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Apply
    </button>
    <a href="/jobs" class="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       Refer a Friend
    </a>
</div>
</div>
  )
}

export default JobTest