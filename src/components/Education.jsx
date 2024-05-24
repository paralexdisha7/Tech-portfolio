import React from 'react'

const Education = () => {
    const education = [
        {
          id: 1,
          degree: "10th CBSE Boards",
          percentage: "92%",
          school: "Sanjay Ghodawat International School, Kolhapur",
          year: 2019,
        },
        {
          id: 2,
          degree: "12th CBSE Boards",
          percentage: "85.4%",
          school: "Sanjay Ghodawat International School, Kolhapur",
          year: 2021,
        },
        {
          id: 3,
          degree: "B.Tech in Computer Engineering",
          percentage: "CGPA 8.1",
          school: "Pimpri-Chinchwad College of Engineering, Pune",
          year: 2025,
        },
      ];
  return (
    <div
    name="education"
    className="h-full w-full bg-cyan-950 text-white font-normal relative z-0"
  >
    <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400  sm:pt-20">
      My Education
    </h2>
    {education.map(({ id, year, school, degree, percentage }) => (
      <div
        key={id}
        className="flex justify-center items-center my-4 text-md"
      >
        <div className="mx-6 md:w-1/3 p-5 bg-slate-500 rounded-md flex gap-10 ">
          <div className="flex flex-col justify-between gap-4">
            <p className="font-logo text-2xl">{degree}</p>
            <p className="mr-6 text-sm">{school}</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-logo text-2xl w-24">{percentage}</p>
            <p className="text-sm">{year}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  )
}

export default Education