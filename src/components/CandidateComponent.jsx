import React from 'react'

const CandidateComponent = () => {
  return (
    
<div class="m-5 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 p-5">
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mt-3 rounded-md shadow-lg" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Bonnie" />
        <h5 class="mb-1 text-xl mt-4 font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-1 space-x-3 md:mt-6">
            <a href="/candidateprofile" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check Profile</a>
        </div>
    </div>
</div>

  )
}

export default CandidateComponent