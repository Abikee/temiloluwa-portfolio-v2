"use client";
import Link from "next/link";
import{manrope} from "../fonts"

const navItems = [
 { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
] ;

type ActiveState = (typeof navItems)[number];

export default function navbar (){
  

    return(

   <nav className={`${manrope.className} text-white flex justify-center sm:gap-8 sm:p-8 gap-2 p-3`}>
      
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
          className=" px-2 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 border border-transparent
               hover:bg-[#E90C06] hover:text-black hover:border-[#E90C06] text-white "
          >
            {item.name}
          </Link>
        ))}
      
    </nav>

    )
}