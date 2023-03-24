import React from 'react'

const JobComponent = ({job}) => {

  const setJobClicked = () => {
    console.log('hi')
  }



  return (
    <div className="py-3 sm:px-20 px-5 max-w-7xl mx-auto">
      <div className="bg-white py-5 px-10 lg:flex lg:justify-between items-center drop-shadow-2xl rounded-lg">
        <div className="lg:flex gap-5 items-center">
          <div className="lg:mt-0 -mt-12">
          <img src={job.logo} alt="" className="w-14 lg:w-full" />
          </div>
          <div className="flex pb-1 pt-1">
            <div>
              <div className="flex gap-3 pb-1">
                <h1 className="text-darkCyan font-bold pt-1 text-md">
                  {job.company}
                </h1>
                {job.new && (
                  <div className="text-white text-sm bg-darkCyan rounded-full font-bold flex items-center px-2.5 my-0.5">
                    NEW!
                  </div>
                )}
                {job.featured && (
                  <div className="text-white bg-veryDarkCyan flex items-center px-2.5 rounded-full font-bold text-sm my-0.5">
                    FEATURED
                  </div>
                )}
              </div>
              <div
                value={job.position}
                onClick={(event) => {
                  setJobClicked(event.target.value)
                }}
              >
                <button
                  value={job.position}
                  onClick={(event) => {
                    setJobClicked(event.target.value)
                  }}
                  className="font-bold py-1 tracking-wider text-start text-lg hover:text-darkCyan text-black"
                >
                  {job.position}
                </button>
              </div>
              <div className="flex gap-3 text-md text-darkCyan pt-1">
                <div>{job.postedAt}</div>·<div>{job.contract}</div>·
                <div>{job.location}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden h-0.5 w-full bg-gray-200 mt-3"></div>
        <div className="">
        </div>
      </div>
    </div>
  )
}

export default JobComponent