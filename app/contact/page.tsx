import { handjet } from "../fonts"
import { manrope } from "../fonts"

export default function contact () {

return(
<div className="px-16 py-9">
    <h1 className={`${handjet.className} text-6xl text-white`}>Contact <span className="text-[#E90C06]">.</span></h1>

<p className={`${manrope.className} text-white text-base md:text-xl py-18`}>Whether you're launching a business, building a 
   personal brand, or bringing a new product to life, I can help you actualize it.
   Feel free to get in touch with me.</p>

<div className="flex justify-center  items-center mt-6 flex-col">
   <button className="border border-transparent bg-[#E90C06] rounded-full p-6">
<a
href="https://calendar.app.google/LbEiZnkQY9Mo7S9q9"
 target="_blank"
rel="noopener noreferrer"
>
Schedule a meeting
</a>
   </button>

   <p className="text-white p-12">or</p>

   <div className="flex gap-4">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=temiloluwaakinrujomu90@gmail.com"
  target="_blank"
  rel="noopener noreferrer" 
  >
<img
 src="gmail-icon.png"
  alt="mail"
className="w-18 h-18"
/>
</a>

<a href="https://www.linkedin.com/in/temiloluwa-akinrujomu-579178178/">
<img
 src="linkedin-icon.png"
  alt="mail"
  className="w-20 h-18 mt-1"
/>
</a>
   </div>

   </div>

</div>
)}