import {firaCode} from "../fonts"

const items = [
    "Hey," ,
    "" ,
    "I'm Temiloluwa Akinrujomu,",
    "a Frontend Engineer who enjoys building designs that makes",
    "digital experiences fluid.",
    " I believe every interface tells a story, and my objective is",
    " to make every engagement feel intuitive, responsive, and",
    "streamlined.",
    "I build web applications with React, Next.js, Tailwind, and",
    "  JavaScript, which make my building and creative process",
    "enjoyable for people.",
    " My curiosity about people sets me apart because it makes me",
    "design visually appealing and user-centered, accessible",
    "experiences.",
    "I am always learning,experimenting with new ideas and new",
     " technologies that can help me build better products by",
     "equipping myself with the knowledge i have.",
     " Outside writing code, I enjoy storytelling through content",
     "creation, books, and also like having great conversations,",
      "which make me explore what people could like or want through", 
      "their perspectives and experiences.",
      "",
      "",
      "This are tools i use :",
      <>[<span className="text-[#E90C06]"> Framer Motion, React, Next.js, HTML, Tailwind, Camera,</span></>,
       <><span className="text-[#E90C06]">Writing Materials, Research</span>]</>
]

export default function aboutMe () {

    return(

        <div className="flex justify-center px-4 py-10">
            <div className="  w-full max-w-4xl bg-[#3c3d3c] border my-10">

                <div className={`${firaCode.className} text-white px-6 py-6 sm:px-6 md:px-10 md:py-10 text-[7.5px]
          md:text-base lg:text-lg flex flex-col gap-3`}>
                
                {items.map ((item, index) => (
<div key={index} className=" flex gap-2 sm:gap-4 md:gap-8 items-start">
    <span className="text-[#E90C06] w-4 md:w-6 shrink-0"> {index + 1} </span>
    <p>{item}</p>

</div>
                ))}
                </div>

            </div>
        </div>
    )
}