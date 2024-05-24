import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        < >
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/paralexdisha7/",
      style:""
    },
    {
      id: 2,
      child: (
        < >
          Linked In <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/disha-parale-224b34247/",
    },
    {
      id: 3,
      child: (
        < >
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/paralexdisha7",
    },
    {
      id: 4,
      child: (
        < >
          Mail <MdOutlineEmail size={30} />
        </>
      ),
      href: "mailto:paraledisha20@gmail.com",
    },
  ];

  return (
    <div className="sm:relative sm:w-16 sm:-top-[470px] sm:z-10 xl:flex flex-col md:top-[35%] left-0 md:fixed ">
      <ul  className="sm:py-7   ">
        {links.map(({id,child,href}) => (
          <li key={id}className="flex justify-end items-center w-40 h-14 bg-white rounded-r-md ml-[-110px] hover:ml-0 duration-300 hover:bg-slate-900 hover:text-white my-1 ">
            <a
              href={href}
              className="flex justify-between items-center gap-3 px-4  text-lg font-bold"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
