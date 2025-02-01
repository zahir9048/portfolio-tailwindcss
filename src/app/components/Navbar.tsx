import {Inter} from "next/font/google"
import Link from "next/link"
import React from "react"

// For google Font
const inter = Inter({subsets:['latin']})

const Navbar = () => {
    // navbar items here
    const navItems = [
        {
            name:"About",
            link:"#"
        },
        {
            name:"Projects",
            link:"#project"
        },
        {
            name:"Skills",
            link:"#Skills"
        },
        {
            name:"Contact",
            link:"#contact"
        }
]
    return(
        <div className="">
            <ul className={`${inter.className} p-3 m-[66px] flex items-center justify-end h-[24px] font-medium text-[20px] space-x-6`}>
           {
            navItems.map((item,i)=>(
                <li key={i}> 
                <Link href={item.link} className="hover:text-myPink">
                {item.name}
                </Link>
                
                </li>
            ))
           }
            
        </ul>
        </div>
        
    )
} 

export default Navbar

