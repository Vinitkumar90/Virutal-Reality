import {Menu, X} from "lucide-react"

import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { useState } from "react"



const Navbar = () => {
    const[mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container mx-auto px-4  text-sm relative ">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">VirtualRC</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((items,index)=>(
                      <li key={index}>
                        <a href={items.href}>{items.label}</a>
                      </li>  
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>
                    <a href="#" className="bg-gradient-to-r from-orange-500 to bg-orange-800 py-2 px-3 rounded-md">
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X/> : <Menu/> }
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="flex flex-col justify-center items-center w-full z-20 p-12 lg:hidden bg-neutral-900 fixed right-0 ">
                    <ul>
                        {navItems.map((items,index)=>(
                            <li key={index} className="py-4 text-center">
                                <a href={items.href}>{items.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex sm:space-x-6 space-x-2 ">
                        <a href="#" className="py-2 px-3 border rounded-md " >
                            Sign In
                        </a>
                        <a href="#" className="px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                            Create an account
                        </a>
                    </div>
                </div>   
            )}
        </div>
    </nav>
  )
}

export default Navbar