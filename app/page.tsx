import{handjet, manrope, bitcountGridDouble} from "../fonts"

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "GitHub",
];

export default function Home () {

return(
    <div className="min-h-screen">

        {/* intro */}
        <div className={`${handjet.className} flex items-center justify-end `}>
        <div className="text-right w-1/2 pr-2 md:pr-6 lg:pr-10">
            <p className={`${handjet.className} text-[#FFFFFF]  text-3xl md:text-6xl lg:text-8xl p-1 md:p-2 lg:p-4`}>
        <span>HEY<span className="text-[#E90C06]">, </span> <br/>I<span  className="text-[#E90C06]">'</span>M TEMILOLUWA <br/>AKINRUJOMU</span>
            </p>
            <p className={`${handjet.className} text-[#FFFFFF] text-lg`}>
                FRONT-END ENGINEER
            </p>
        </div>

        <div className="w-1/2 pl-2 md:pl-8 lg:pl-20 relative top-8 lg:top-18">
      <img
      src="/temmy-v2.jpeg"
      alt="temilolouwa"
      width={300}
      height={350}
      className="rounded-3xl w-[130px] md:w-[220px] lg:w-[300px]"
      ></img>

      <div className=" absolute -bottom-10 -left-2 md:left-4 lg:left-10 bg-[#1E1E1E] border-transparent 
      inline-flex flex-col items-center justify-center gap-2 border border-red-500 rounded-2xl  p-2
        md:p-3 lg:pl-8 lg:pb-4  w-12 h-24 md:w-16md:h-28 lg:w-20 lg:h-38">
        <img
        src="/linkedin-icon.png"
        alt="linkedin"
        className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2"
        >
        </img>

        <img
        src="/gmail-icon.png"
        alt="gmail"
         className="w-4 h-4 md:w-5 md:h-5"
        >
        </img>

        <img
        src="/github-icon.png"
        alt="github"
         className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
        >
        </img>
      </div>
    </div>
        </div>


        <div className="mt-50 flex items-center justify-center gap-3 px-4">
            <img
            src="/open-element.png"
            alt="open element"
            className="w-7 h-auto"
            >
            </img>

        <div className="flex-1 max-w-xl text-white text-center text-xs sm:text-sm">
            <p>As a Frontend Engineer,
   I believe every interface tells a story, so i build digital experiences that make those stories meaningful,</p>
    <p className="mt-2">
    intuitive, and memorable.{" "}
    <a
      href="/temiloluwa_cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download
      className="underline text-[#E90C06]"
    >
      Click here
    </a>{" "}
     to access my resume</p>
   </div>

        <img
        src="/close-element.png"
        alt="close element"
        className="w-14 h-auto self-end "
        >
        </img>
        </div>


{/* box with the tech stack skills */}
<div className="flex justify-center items-center">
        <div className=" w-full max-w-6xl border border-[#E90C06] rounded-xl flex sm:flex-row lg:flex-row m-30">

            <div className="w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0">
<div className={`${bitcountGridDouble.className} text-[#E90C06] text-3xl sm:text-6xl md:text-7xl
        lg:text-9xl text-center pl-4`}>
    TECH STACK
</div>
</div>

<div className="w-full lg:w-1/2 text-white p-6 md:p-8 flex flex-col justify-center">

<div className="flex items-center justify-between"> 
    <h6 className={`${handjet.className} text-2xl md:text-3xl`}>summAIze</h6>

    <div className=" flex items-center ml-2 md:gap-2">
<img
src="github-icon.png"
alt="github"
className="w-5 h-5 sm:w-8 sm:h-8 flex shrink-0"
>
</img>

<a
  href="https://github.com/Abikee"
  target="_blank"
  rel="noopener noreferrer"
>
<img
src="outward_arrow.png"
alt="arrow"
className="w-5 h-5 sm:w-8 sm:h-8 mt-2 flex-shrink-0"
>
</img>
</a>

</div>
</div>

    <p className={`${manrope.className} mt-4 text-[7px] sm:text-base`}>i combine these modern 
      frontend development tools with creative and thoughtful design to create digital experiences
       that are intuitive, responsive and engaging.</p>

<div className="flex flex-wrap gap-3 text-white justify-center mt-6">
{techStack.map ((skills)=> (
<span
key={skills}
className="border border-[#FFFFFF] bg-[#7F7F7F] rounded-lg px-4 py-2 border-[0.25px] text-[6px] sm:text-sm"
>
    {skills}
</span>
)
)}
</div>
</div>
        </div>
        </div>

{/* straight line with skills */}
        <div className={`${handjet.className} relative flex flex-col items-center text-2xl`}>
<div className="w-[1px] h-240 bg-white "></div>

        <div className="absolute top-15 w-4 h-4 rounded-full bg-[#E90C06]">
<p className="text-white absolute right-10 top-1/2 -translate-y-1/2 ">HTML
<span className="text-[#E90C06]">.</span>
</p>
        </div>

        <div className="absolute top-45 w-4 h-4 rounded-full bg-[#E90C06]">
          <p className="absolute left-8 top-1/2 -translate-y-1/2 text-white">Css
          <span className="text-[#E90C06]">.</span>
          </p>
        </div>

          <div className="absolute top-75 w-4 h-4 rounded-full bg-[#E90C06]">
            <p className="text-white absolute right-10 top-1/2 -translate-y-1/2 ">Javascript
            <span className="text-[#E90C06]">.</span>
            </p>
            </div>  

          <div className="absolute top-105 w-4 h-4 rounded-full bg-[#E90C06]">
            <p className="absolute left-8 top-1/2 -translate-y-1/2 text-white">Typescript
            <span className="text-[#E90C06]">.</span>
            </p>
          </div>

            <div className="absolute top-135 w-4 h-4 rounded-full bg-[#E90C06]">
              <p className="text-white absolute right-10 top-1/2 -translate-y-1/2 ">React
              <span className="text-[#E90C06]">.</span>
              </p>
            </div>

              <div className="absolute bottom-75 w-4 h-4 rounded-full bg-[#E90C06]">
                <p className="absolute left-8 top-1/2 -translate-y-1/2 text-white">Next.js
                <span className="text-[#E90C06]">.</span>
                </p>
              </div>

                <div className="absolute bottom-45 w-4 h-4 rounded-full bg-[#E90C06]">
                  <p className="text-white absolute right-10 top-1/2 -translate-y-1/2 ">Tailwind
                  <span className="text-[#E90C06]">.</span>
                  </p>
                </div>

                  <div className="absolute bottom-15 w-4 h-4 rounded-full bg-[#E90C06]">
                    <p className="absolute left-8 top-1/2 -translate-y-1/2 text-white">Github
                    <span className="text-[#E90C06]">.</span>
                    </p>
                  </div>

        </div>

    </div>
)
}