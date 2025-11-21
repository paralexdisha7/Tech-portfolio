import React from "react";

const Skills = () => {
  const skills = [
    // {
    //   id: 1,
    //   sname: "c",
    // },
    {
      id: 2,
      sname: "cpp",
    },
    // {
    //   id: 3,
    //   sname: "java",
    // },
    {
      id: 4,
      sname: "html",
    },
    {
      id: 5,
      sname: "css",
    },
    {
      id: 6,
      sname: "js",
    },
    {
      id: 7,
      sname: "react",
    },
    {
      id: 8,
      sname: "mysql",
    },
    // {
    //   id: 9,
    //   sname: "mongo",
    // },
    {
      id: 10,
      sname: "canva",
    },
    {
      id: 11,
      sname: "figma",
    },
    {
      id: 12,
      sname: "git",
    },
    {
      id: 13,
      sname: "github",
    },
    // {
    //   id: 14,
    //   sname: "node",
    // },
    // {
    //   id: 15,
    //   sname: "php",
    // },
    // {
    //   id: 16,
    //   sname: "postman",
    // },
    {
      id: 17,
      sname: "py",
    },
    // {
    //   id: 18,
    //   sname: "r",
    // },
    
  ];
  return (
    <div
      name="skills"
      className=" w-full bg-cyan-950 text-white font-normal relative z-0 flex flex-col py-24 items-center"
    >
      <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10">
        My Skills{" "}
      </h2>
      <ul className="flex flex-wrap gap-8 items-center justify-center max-w-6xl">
        {skills.map(({ id, sname }) => (
          <li
            key={id}
            className="w-36 h-36  bg-slate-400 p-4 rounded-md flex justify-center items-center "
          >
            <img src={`/skills/${sname}.png`} alt={`${sname}`} className="max-h-28"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
