import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      pname: "Venu Bamboo",
      stack: "ReactJS, CSS",
      year: "2023",
      href: "https://venu-web.netlify.app/",
    },
    {
      id: 2,
      pname: "Places Review",
      stack: "ReactJS, NodeJS, ExpressJS, MongoDB, Postman",
      year: "2023",
      href: "https://places-experience.netlify.app/",
    },
    {
      id: 3,
      pname: "TicTacToe Game",
      stack: "HTML, CSS, JavaScript",
      year: "2023",
      href: "https://paralexdisha7.github.io/TicTacToe-game/",
    },
    {
      id: 9,
      pname: "Hotel Review 1.0",
      stack: "HTML, CSS, JavaScript",
      year: "2023",
      href: "https://aaradhya-review.vercel.app/",
    },
    {
      id: 5,
      pname: "Hotel Review 2.0",
      stack: "HTML, CSS, JavaScript",
      year: "2023",
      href: "https://paralexdisha7.github.io/Hotel-review2.0/",
    },
    {
      id: 6,
      pname: "LinkTree",
      stack: "HTML, CSS",
      year: "2023",
      href: "https://paralexdisha7.github.io/My-links/",
    },
    {
      id: 7,
      pname: "QR Code Generator",
      stack: "HTML, CSS, JavaScript",
      year: "2023",
      href: "https://paralexdisha7.github.io/QR-code-generator/",
    },
    {
      id: 8,
      pname: "Dice Game",
      stack: "ReactJS, Styled-Componets",
      year: "2024",
      href: "https://dice-game-smoky-one.vercel.app/",
    },
    
    {
      id: 10,
      pname: "Photography Portfolio",
      stack: "HTML, CSS",
      year: "2024",
      href: "https://photography-portfolio-iota-two.vercel.app/",
    },
    {
      id: 11,
      pname: "Hotel Website",
      stack: "ReactJS, Firebase, NodeJS",
      year: "2023",
      href: "https://hotelwebreact.netlify.app/",
    },
    {
      id: 12,
      pname: "Hotel Management System",
      stack: "Java, Swing, Oracle Database",
      year: "2023",
      href: "https://github.com/paralexdisha7/hotel-management-system",
    },
    {
      id: 13,
      pname: "Sentiment Analysis on Tweets",
      stack: "Python, Streamlit, ML, NLP",
      year: "2024",
      href: "https://sentiment-analysis-ml-project.onrender.com/",
    },
  ];

  return (
    <div
      name="projects"
      className=" w-full bg-cyan-950 text-white font-normal relative z-0 flex flex-col py-24 "
    >
      <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10">
        My projects{" "}
      </h2>
      <ul className="flex flex-wrap gap-12 items-center justify-center">
        {projects.map(({ id, pname, stack, year, href }) => (
          <li
            key={id}
            className="md:w-3/12 sm:w-3/4  bg-slate-900 p-4 rounded-md hover:scale-95 duration-200"
          >
            <a href={href} target="_blank">
              <img src={`/projects/${id}.png`} alt={`Project ${id}`} />
              <div className="mt-4 font-light">
                <p className="font-medium text-2xl">{pname}</p>
                <p>{stack}</p>
                <p>{year}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
