import React from 'react'
import { Link } from 'react-router-dom'
import jobify from "./jobify.png"
// import Footer from "./Footer";

const Hero = () => {
  return (
//     <>
//     <div class="bg-white dark:bg-gray-900">
//     <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//         <div class="mr-auto place-self-center lg:col-span-7">
//             <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Find your dream job or perfect candidate with Jobify</h1>
//             <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
//             <mark class="px-2 text-white bg-blue-600 font-bold rounded dark:bg-blue-500">Jobify</mark> offers a user-friendly interface that makes it easy for job seekers to navigate and find job opportunities that match their skills and experience. Job postings on the platform typically include detailed job descriptions, required qualifications, and salary information, which helps job seekers make informed decisions about which jobs to apply for.</p>
//             <Link to="/jobs" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-gray-400 hover:text-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
//                 Find Jobs
//             </Link>
//             <Link href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
//                 Find Candidates
//             </Link> 
                  
//         </div>      
//     </div>
    
// </div>
//     </>
<>
<section class="bg-white">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Find your dream job or perfect candidate with Jobify</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"><mark class="px-2 text-white bg-blue-600 font-bold rounded">Jobify</mark> offers a user-friendly interface that makes it easy for job seekers to navigate and find job opportunities that match their skills and experience. Job postings on the platform typically include detailed job descriptions, required qualifications, and salary information, which helps job seekers make informed decisions about which jobs to apply for.</p>
            <Link to="/jobs" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-gray-400 hover:text-black focus:ring-4 focus:ring-primary-300">
               Find Jobs
           </Link>
           <Link href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
               Find Candidates
           </Link> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={jobify} alt="mockup" />
        </div>                
    </div>
</section>
<div class="w-3/4 mx-auto border-b-2 border-gray-200"></div>
</>
  )
}

export default Hero