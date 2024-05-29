import React from "react";
import Profile from "../../assets/home.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div id="home">
      <img
        src={Profile}
        className="w-full h-screen object-cover object-left"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-cambay text-primaryText">
            I'm Aniket Gourshete
          </h1>
          <h2 className="flex font-cambay text-primaryText text-3xl">
            I'm a &nbsp;
            <TypeAnimation
              sequence={[
                "Full stack developer",
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1500,
                "Cybersecurity Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                color: "#1E2022",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.linkedin.com/in/aniket-g246/" target="_blank"><FaLinkedin className="cursor-pointer" size={20} /></a>
            <a href="https://github.com/Aniket24G" target="_blank"><FaGithub className="cursor-pointer" size={20} /></a>
            <a href="https://www.instagram.com/aniketg_24/" target="_blank"><FaInstagram className="cursor-pointer" size={20} /></a>
            <a href="https://x.com/aniket24g" target="_blank"><FaTwitter className="cursor-pointer" size={20} /></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
