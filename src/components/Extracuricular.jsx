import React from 'react'

const Extracuricular = () => {
    const volunteer = [
        {
          id: 1,
          eventName: "Anantya - Flagship Event of computer Department at PCCOEACM, Pune ",
          year: "2023, 2024",
        },
        {
          id: 2,
          eventName: "Winter School by ACM India, Ahmedabad University",
          year: "2023",
        },
        {
          id: 3,
          eventName: "Web-Development Workshop at GDSC-PCCOE, Pune ",
          year: "2023",
        },
        {
          id: 4,
          eventName: "Campus Ambassador at Entrepreneurship Cell, Pune by IIT Kharagpur",
          year: "2022",
        },
        {
          id: 5,
          eventName: " ICGAMS-2K22 at PCCOE , Pune",
          year: "2022",
        },
      ];
  return (
    <div
        name="extracurricular"
        className=" w-full bg-cyan-950 text-white font-normal relative z-0"
      >
        <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10 sm:pt-20">
          Extracurricular{" "}
        </h2>

        <div className=" px-10 ">
          <ul className="flex flex-col gap-8 justify-center items-start md:ml-[400px] ">
            {volunteer.map(({id,eventName,year})=>(
               <li key={id} >
               <p className="font-light text-xl md:text-2xl">
                 {eventName}
               </p>
               <p className="font-medium text-sm font-logo md:text-xl">{year}</p>
             </li>
            ))}
           
          </ul>
        </div>



        <div
        name="other"
        className=" w-full bg-cyan-950 text-white font-normal relative z-0 py-24 "
      >
        <h2 className="text-center font-logo text-3xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10">
          Other{" "}
        </h2>

        <div className=" px-10  ">
          <ul className="flex flex-col gap-3 justify-center items-start md:ml-[600px] font-light ">
            <li>Hobbies : Photography, Travelling, Listening to Music</li>           
            <li>DOB : 25.07.2003</li>           
            <li>Languages : Marathi, Hindi, English</li>           
          </ul>
        </div>

        
      </div>

      </div>

  )
}

export default Extracuricular