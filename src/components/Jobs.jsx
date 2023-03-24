import React, { useEffect, useState } from 'react'
import data from "../data.json"
import JobTest from './JobTest';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect (()=>{
        setJobs(data);
    }, []);
    // console.log(jobs);
  return (
    <div class="dark:bg-gray-900 mb-6 ">
          <h2 class="mb-4 ml-10  max-w-screen-xl text-4xl tracking-tight underline font-extrabold text-gray-900 dark:text-white">Check our our Jobs</h2>
    <div className='dark:bg-gray-900 ml-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4 content-evenly sm:px-0'>
                  {/* <a href="#" class="inline-flex items-center m-3 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Job Listings</a> */}
         {
          jobs.map(job=>{
            return (
              <JobTest job={job}/>
            )
          })
         }         
    </div>
    <Footer />
    </div>
    
  )
}

export default Jobs
