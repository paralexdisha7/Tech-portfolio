import React from "react";
import profileImage from "../assets/profile.jpg";
import { FaArrowDown } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import Education from "./Education";
import Experience from "./Experience";
import Extracuricular from "./Extracuricular";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Contact from "./Contact";
import { Link } from "react-scroll";



const About = () => {
  return (
    <div
      name="about me"
      className="h-full md:h-screen w-full bg-cyan-950 text-white font-extralight relative z-0 "
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl my-10 font-logo pt-20 mx-2">
            <p className="text-center font-logo text-5xl  underline underline-offset-8 decoration-1 decoration-slate-400 mb-10 ">
              About Me{" "}
            </p>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "A Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Ui/Ux Designer",
                1000,
                "A Content Creator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.26m", display: "flex" }}
              repeat={Infinity}
            />
          </h2>
          
<div>
<p className="text-justify pb-3 sm:px-2 ">
            Hey, I'm Disha Parale, a computer engineer from Pune with a flair
            for tech and creativity. From coding dynamic websites to managing
            social media, I love bringing ideas to life. When I'm not immersed
            in tech, you'll find me exploring new places or capturing moments
            with my camera. Let's connect and create something amazing!
          </p>

          <div className="flex gap-16 justify-center relative z-50 ">
            <Link to="contact me" smooth duration={500} className="flex gap-2 text-teal-950 bg-white font-semibold p-3 px-4 rounded-full hover:scale-90 duration-200 text-sm md:text-lg">
              Contact Me <IoMdContacts size={20} />
            </Link>
            <a href="/DishaResume_CE_8.pdf" >
              {" "}
              <button className="flex gap-2  text-teal-950 bg-white font-semibold p-3 px-4 rounded-full hover:scale-90 duration-200 text-sm md:text-lg">
                Resume <FaArrowDown size={20} />
              </button>
            </a>
          </div>
</div>

        </div>
        <div
          
        >
          <img
            src={profileImage}
            alt="profile"
            className=" rounded-sm mx-auto w-1/2  drop-shadow-xl my-10 hover:scale-95 duration-300 "
          />
        </div>
      </div>

      <Education />

      <Experience />

      <Extracuricular />
      <Skills />
      <Projects />
      <Certificates/>
      <Contact/>
      
    </div>
  );
};

export default About;
