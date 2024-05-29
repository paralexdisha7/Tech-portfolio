import React from "react";

const Contact = () => {
  return (
    <div
      name="contact me"
      className=" h-screen w-full bg-cyan-950 text-white font-normal relative z-0 flex flex-col py-24 items-center"
    >
      <h2 className="text-center font-logo text-5xl py-4 underline underline-offset-8 decoration-1 decoration-slate-400 mb-10">
        Contact Me{" "}
      </h2>

      <form action="https://getform.io/f/lbkmvqxb" method="POST" className="w-2/3 md:w-1/3 flex flex-col gap-5 font-light">
        <input type="text" placeholder="name*" name="name" id="name" className="bg-slate-800 text-sm p-2 "/>

        <input type="email" placeholder="email*" name="email" id="email" className="bg-slate-800 text-sm p-2 "/>


        <textarea name="message" id="message"  className="bg-slate-800 text-sm p-2 min-h-36 " placeholder="Message*"></textarea>

        <button type="submit" className="w-60 mx-auto bg-slate-200 p-2 text-cyan-950 font-bold rounded-full mt-7 hover:scale-105 duration-200">Send</button>


      </form>
      <p className="pt-44 font-thin bg-cyan-950">Designed by Disha Parale</p>



    </div>
  );
};

export default Contact;
