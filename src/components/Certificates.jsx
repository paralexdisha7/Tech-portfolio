import React from 'react'

const Certificates = () => {
    const certificates = [
        {
            id:1,
            cname:'basicweb',
            course:"Basic Web Development by Teachnook",
            year:2022
        },
        {
            id:2,
            cname:'mern',
            course:"The MERN - FullStack Guide by Udemy",
            year:2023
        },
        {
            id:3,
            cname:'aicte',
            course:"Android Developer Virtual internship by EduSkills",
            year:2024
        },
     
    ]
  return (
    <div
      name="certificates"
      className=" w-full bg-cyan-950 text-white font-normal relative z-0 flex flex-col py-24 items-center"
    >
      <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10">
        Certificates{" "}
      </h2>
      <ul className="flex flex-wrap gap-12 items-center justify-center max-w-6xl">
        {certificates.map(({ id, cname ,course, year}) => (
          <li
            key={id}
            className=" bg-slate-400 p-4 rounded-md flex flex-col justify-center items-center gap-7 max-w-72 "
          >
            <div className='flex justify-center items-center'><img src={`/certificates/${cname}.jpg`} alt={`${course}`} className="max-h-44"/></div>
            <div>
            <p>{course}</p>
            <p>{year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Certificates