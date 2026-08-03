
import { handjet } from "../fonts"

export default function project () {

const projects = [
  {
    title: "Txrnup",
    description: "An event discovery and ticketing platform.",
    image: "/txrnup.jpeg",
    icon: "/github-icon.png",
    icon2: "/outward_arrow.png",
    skills: ["Next.js", "Typescript", "Tailwind"],
    github: "https://whats-happening.txrnxp.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleATB7dxwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp2Tt0qxvW0H_eXc4Ewn7X0iuBuTeCIHoshd_NVnA3L8qpZOpukS1ErYYmZYA_aem_n30c2gIs2uXJ2BgQu_bBYg"
  },
  {
    title: "Zuimi",
    description: "Creative website for streaming film.",
    image: "/zuimi.jpeg",
    icon: "/github-icon.png",
    icon2: "/outward_arrow.png",
    skills: ["Next.js", "Typescript", "SCSS"],
    
  },
  {
    title: "Travel and Tour",
    description: "Replication of a website used for booking flight, touring and making reservation.",
    image: "/travelandtour.jpg",
    icon: "/github-icon.png",
    icon2: "/outward_arrow.png",
    skills: ["Next.js", "Typescript", "SCSS"],
    github: "https://github.com/Abikee/travel-website"
  },
  {
    title: "Portfolio",
    description: "Creative website for the accumulation of my work.",
    image: "/portfolio.jpg",
    icon: "/github-icon.png",
    icon2: "/outward_arrow.png",
    skills: ["Next.js", "Typescript"],
    github: "https://github.com/Abikee/temiloluwa-se-portfolio"
  },
];

return(
<div className="px-4 md:px-10 lg:px-20 py-8 md:py-12">
    <div className={`${handjet.className} text-white text-5xl mb-10`}>
 Projects<span className="text-[#E90C06]">.</span>
    </div>

<div className="flex flex-col gap-12">
  {projects.map((project) => (
    <div
      key={project.title}
      className="border border-[#E90C06] rounded-2xl p-6"
    >

      <div className="flex gap-6">

         <div className="w-full md:w-2/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full md:h-48 object-cover rounded-xl"
          />
        </div>

       <div className="w-3/5 flex flex-col">

          <div className="flex items-center justify-between">
            <h2 className={`${handjet.className} text-white text-4xl`}>
              {project.title}
            </h2>

            <div className="flex gap-6">
              <img
                src={project.icon}
                alt="github"
                className="w-8 h-8"
              />
              <a
              href={project.github}
              target="_blank"
               rel="noopener noreferrer"
               >
              <img
                src={project.icon2}
                alt="arrow"
                className="w-8 h-8"
              />
             </a>
            </div>
          </div>

          <p className="text-white text-sm md:text-base mt-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="text-white text:xl md:text-2xl border border-transparent bg-[#3c3d3c] rounded-lg px-4 py-2"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  ))}
</div>
    
</div>
)}