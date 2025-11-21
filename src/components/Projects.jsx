import React, { useState } from "react";

const Projects = () => {
  const [showMoreFigma, setShowMoreFigma] = useState(false);
  const [showMoreTechnical, setShowMoreTechnical] = useState(false);

  // 🔵 Figma + UI/UX Design Projects (now 6)
  const figmaProjects = [
    { id: "f1", pname: "UtilizeCore - Web App Redesign", stack: "UI/UX · Figma", href: "https://www.behance.net/gallery/239007039/UtilizeCore-Web-redesign", img: "/projects/figma1.png" },
    { id: "f2", pname: "Mess Thread App", stack: "UI/UX · Figma", href: "https://www.behance.net/gallery/235369935/MessThread-A-Student-Centric-Canteen-Review-App", img: "/projects/figma2.png" },
    { id: "f3", pname: "Five Frames Mediaworks", stack: "UI/UX · Figma", href: "https://www.behance.net/gallery/239008711/FiveFrames-Mediaworks", img: "/projects/figma3.png" },
    { id: "f4", pname: "Coffee Shop App", stack: "UI/UX · Figma", href: "https://www.behance.net/gallery/235367811/Coffee-Shopp-app", img: "/projects/figma4.png" },
    { id: "f5", pname: "Cuisine Connect", stack: "UI/UX · Figma", href: "https://www.behance.net/gallery/237970893/Cuisine-Connect", img: "/projects/figma5.png" },
    { id: "f6", pname: "Foodjet", stack: "UI/UX · Figma", href: "https://www.behance.net/gallery/235366537/FoodJet-Crafting-a-User-Friendly-Food-Delivery-App", img: "/projects/figma6.png" },
  ];

  const figmaVisible = figmaProjects.slice(0, 3);
  const figmaHidden = figmaProjects.slice(3);

  // 🔵 Technical Projects
  const technicalProjects = [
    { id: 1, pname: "Venu Bamboo", stack: "ReactJS, CSS", year: "2023", href: "https://venu-web.netlify.app/" },
    { id: 2, pname: "Places Review", stack: "ReactJS, Node, Express, MongoDB", year: "2023", href: "https://places-experience.netlify.app/" },
    { id: 3, pname: "TicTacToe Game", stack: "HTML, CSS, JS", year: "2023", href: "https://paralexdisha7.github.io/TicTacToe-game/" },
    { id: 9, pname: "Hotel Review 1.0", stack: "HTML, CSS, JS", year: "2023", href: "https://aaradhya-review.vercel.app/" },
    { id: 5, pname: "Hotel Review 2.0", stack: "HTML, CSS, JS", year: "2023", href: "https://paralexdisha7.github.io/Hotel-review2.0/" },
    { id: 6, pname: "LinkTree", stack: "HTML, CSS", year: "2023", href: "https://paralexdisha7.github.io/My-links/" },
    { id: 7, pname: "QR Code Generator", stack: "HTML, CSS, JS", year: "2023", href: "https://paralexdisha7.github.io/QR-code-generator/" },
    { id: 8, pname: "Dice Game", stack: "ReactJS, Styled-Components", year: "2024", href: "https://dice-game-smoky-one.vercel.app/" },
    { id: 12, pname: "Hotel Management System", stack: "Java, Swing, Oracle DB", year: "2023", href: "https://github.com/paralexdisha7/hotel-management-system" },
    { id: 13, pname: "Sentiment Analysis", stack: "Python, Streamlit, ML, NLP", year: "2024", href: "https://sentiment-analysis-ml-project.onrender.com/" },
    { id: 14, pname: "Password Generator", stack: "React Native", year: "2024", href: "https://github.com/paralexdisha7/password-gen-rn" },
  ];

  const techVisible = technicalProjects.slice(0, 3);
  const techHidden = technicalProjects.slice(3);

  return (
    <div
      name="projects"
      className="w-full bg-cyan-950 text-white font-normal relative z-0 flex flex-col py-24"
    >
      <h2 className="text-center font-logo text-5xl underline underline-offset-8 decoration-slate-400 mb-16">
        My Projects
      </h2>

      {/* ⭐ Figma Projects Section */}
      <h3 className="text-center text-3xl font-semibold mb-8">UI/UX Design Projects</h3>

      <ul className="flex flex-wrap gap-12 items-center justify-center mb-10">
        {(showMoreFigma ? figmaProjects : figmaVisible).map(({ id, pname, stack, href, img }) => (
          <li
            key={id}
            className="md:w-3/12 sm:w-3/4 bg-slate-900 p-4 rounded-md hover:scale-95 duration-200"
          >
            <a href={href} target="_blank">
              <img src={img} alt={pname} />
              <div className="mt-4 font-light">
                <p className="font-medium text-2xl">{pname}</p>
                <p>{stack}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Figma Expand Button */}
      <div className="flex justify-center mb-20">
        <button
          onClick={() => setShowMoreFigma(!showMoreFigma)}
          className="px-6 py-2 text-lg bg-slate-800 hover:bg-slate-700 rounded-md transition"
        >
          {showMoreFigma ? "View Less" : "View More"}
        </button>
      </div>

      {/* ⭐ Technical Projects Section */}
      <h3 className="text-center text-3xl font-semibold mb-8">Technical Projects</h3>

      <ul className="flex flex-wrap gap-12 items-center justify-center">
        {(showMoreTechnical ? technicalProjects : techVisible).map(
          ({ id, pname, stack, year, href }) => (
            <li
              key={id}
              className="md:w-3/12 sm:w-3/4 bg-slate-900 p-4 rounded-md hover:scale-95 duration-200"
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
          )
        )}
      </ul>

      {/* Technical Expand Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMoreTechnical(!showMoreTechnical)}
          className="px-6 py-2 text-lg bg-slate-800 hover:bg-slate-700 rounded-md transition"
        >
          {showMoreTechnical ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
