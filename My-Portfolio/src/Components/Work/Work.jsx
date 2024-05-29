import React from "react";
import WorkItem from "./WorkItem";

function Work() {
  const WorkData = [
    {
      year: 2022,
      title: "Intern",
      company: "Infosys Springboard",
      desc: "Developed a football analyytics website with a team 13 members",
      tech: "AngularJs, NodeJs, PostgreSql",
    },
    {
      year: 2023,
      title: "IoT Intern",
      company: "Emertxe",
      desc: "Developed a Home automation system based on Internet of things",
      tech: "IoT, SDLC, Arduino ",
    },
  ];
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-cambay text-center text-primaryText">
        Experience
      </h1>
      {WorkData.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          desc={item.desc}
          tech={item.tech}
        />
      ))}
    </div>
  );
}

export default Work;
