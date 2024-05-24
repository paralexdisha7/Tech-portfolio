import React from 'react'

const Experience = () => {
  return (
    <div
    name="experience"
    className=" w-full bg-cyan-950 text-white font-normal relative z-0"
  >
    <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10 sm:pt-20">
      Work Experience
    </h2>
    <div className="flex gap-10">
      <div className="w-[1px] bg-white h-[500px] relative sm:left-1/3 md:left-1/2">
        <div className="h-4 w-4 bg-white rounded-full relative right-2"></div>
        <div className="h-4 w-4 bg-white rounded-full relative right-2 top-48"></div>
        <div className="h-4 w-4 bg-white rounded-full relative right-2 md:top-[360px] sm:top-96"></div>
      </div>

      <div className=" relative sm:left-1/3 md:left-1/2 ">
        <div className="relative right-2">
          <p className="sm:w-44 md:w-full font-extralight text-lg">
            Social Media Manager at Hotel Aaradhya
          </p>
          <p className="w-2/3 font-medium text-sm">2021 - 23</p>
        </div>

        <div className=" relative right-2 md:top-36 sm:top-24">
          <p className="sm:w-44 md:w-full font-extralight text-lg">
            PR Executive at PCCOEACM
          </p>
          <p className="w-2/3 font-medium text-sm">2023 - 24</p>
        </div>

        <div className=" relative right-2 md:top-72 sm:top-48">
          <p className="sm:w-44 md:w-full font-extralight text-lg">
            Web Developer Intern at Darpan Construction{" "}
          </p>
          <p className="w-2/3 font-medium text-sm">2024</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experience