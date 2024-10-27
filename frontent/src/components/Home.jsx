import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Faiyan",
        "A Full-Stack Developer!",
        "A Secondary Student.",
        "A Web Developer!",
      ],
      typeSpeed: 60,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-wrap md:flex-nowrap">
      {/* This is Highlight Hero! */}
      <div className="w-full md:w-1/2 p-20 flex justify-center items-center flex-col">
        <h2>
          I'm <span ref={el}></span>
        </h2>
        <p className="mt-5 md:py-5 md:px-20">
          Hey there! <br /> I'm <b>Faiyan</b> - a developer who loves creating
          clean, modern websites that are both beautiful and functional. From
          front-end designs to getting hands-on with code. I'm always exploring
          new ways to bring ideas to life. Check out my projects below and see
          what I've been up to!
        </p>
        <button className="mt-10 bg-emerald-500 py-2 px-5 rounded text-white text-2xl">
          Projects
        </button>
      </div>
      {/* This is img */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img src="/pic.png" alt="pic" />
      </div>
    </div>
  );
};

export default Home;
