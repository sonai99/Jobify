import React, { useEffect, useState } from 'react'
import data from "../data.json"
import CandidateComponent from './CandidateComponent';


const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect (()=>{
        setCandidates(data);
    }, []);
    console.log(candidates);

  return (
    <div class="dark:bg-gray-900">
        <h2 class="mb-4 ml-10  max-w-screen-xl text-4xl tracking-tight underline font-extrabold text-gray-900 dark:text-white">Hire the best</h2>
        <div className='dark:bg-gray-900 ml-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4 content-evenly sm:px-0'>
            {
                candidates.map(candidate=>{
                    return (
                        <CandidateComponent candidate={candidate} />
                    )
                })
            }
        </div>
     </div>
  )
}

export default Candidates