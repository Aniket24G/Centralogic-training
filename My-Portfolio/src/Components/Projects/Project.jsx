import React from "react";
import ProjetcItem from "./ProjetcItem";
import BlogSite from "../../assets/blogsite.jpg";
import Sudoku from "../../assets/sudoku.jpg";
import NewsApp from "../../assets/newsapp.jpg";
import Game from "../../assets/2048game.png";

function Project() {
  const projectsData = [
    {
      title: "Blog Site",
      img: BlogSite ,
      tech: "React Js, Appwrite",
      url:'https://github.com/Aniket24G/Learning-React/tree/main/Blog-site'
    },
    {
      title: "2048 - The game",
      img: Game,
      tech: "Java, Swing, AWT",
      url:'https://github.com/Aniket24G/2048---The-Game'
    },
    {
      title: "Fill me- Sudoku solver",
      img: Sudoku ,
      tech: "Python, PyGame",
      url:'https://github.com/Aniket24G/Fill-Me'
    },
    {
      title: "Up To Date - News App",
      img: NewsApp,
      tech: "HTML, CSS, JS, NewsAPI",
      url:'https://github.com/Aniket24G/Up-To-Date'
    },
  ];
  return (
    <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-primaryText font-cambay text-center text-4xl">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-y-12">
        {projectsData.map((item, ind) => (
          <ProjetcItem
            key={ind}
            img={item.img}
            title={item.title}
            tech={item.tech}
            url={item.url}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Project;
