import React from 'react'

const Certificates = () => {
  const certificates = [
    { id:1, cname:'basicweb', course:"Basic Web Development by Teachnook", year:2022 },
    { id:2, cname:'mern', course:"The MERN - FullStack Guide by Udemy", year:2023 },
    { id:3, cname:'aicte', course:"Android Developer Virtual internship by EduSkills", year:2024 },
    { id:4, cname:'uiuxCertificate', course:"Complete Web & Mobile Designer: UI/UX, Figma, +more by Udemy", year:2024 },
    { id:5, cname:'cert1', course:"Conduct UX Research and Test Early Concepts by Google", year:2025 },
    { id:6, cname:'cert2', course:"Build Wireframes and Low-Fidelity Prototypes by Google", year:2025 },
    { id:7, cname:'cert3', course:"Start the UX Design Process: Empathize, Define, and Ideate by Google", year:2025 },
    { id:8, cname:'cert4', course:"Foundations of User Experience (UX) Design by Google", year:2025 },
    { id:9, cname:'cert5', course:"Create High-Fidelity Designs and Prototypes in Figma by Google", year:2025 },
    { id:10, cname:'cert6', course:"Build Dynamic User Interfaces (UI) for Websites by Google", year:2025 },
    { id:11, cname:'cert7', course:"Design a User Experience for Social Good & Prepare for Jobs by Google", year:2025 },
  ];

  const getImagePath = (name) => {
    return `/certificates/${name}.jpg`; // default image
  };

  return (
    <div
      name="certificates"
      className=" w-full bg-cyan-950 text-white font-normal relative z-0 flex flex-col py-24 items-center"
    >
      <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10">
        Certificates
      </h2>

      <ul className="flex flex-wrap gap-12 items-center justify-center max-w-6xl">
        {certificates.map(({ id, cname, course, year }) => (
          <li
            key={id}
            className=" bg-slate-400 p-4 rounded-md flex flex-col justify-center items-center gap-7 max-w-72 "
          >
            {/* Image with fallback */}
            <img
              src={getImagePath(cname)}
              alt={course}
              className="max-h-44"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `/certificates/${cname}.jpeg`;
              }}
            />

            <div>
              <p>{course}</p>
              <p>{year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;


// Start the UX Design Process: Empathize, Define, and Ideate
// Build Wireframes and Low-Fidelity Prototypes
// Create High-Fidelity Designs and Prototypes in Figma
// Foundations of User Experience (UX) Design
// Conduct UX Research and Test Early Concepts
// Build Dynamic User Interfaces (UI) for Websites
// Design a User Experience for Social Good & Prepare for Jobs
// 
// 