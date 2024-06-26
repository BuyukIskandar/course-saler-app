import logo from "../assets/python-6.svg";
import user from "../assets/user.png"
import { useState,useEffect } from "react";
const Navbar = () => {

    return (
        <header className="fixed z-40 py-3 w-full pr-3 sm:px-12 bg-gray-900 border-b">
            <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-0">
                <img src={localStorage.getItem('role') == "Admin" ? logo : user} alt="logo" className="h-8 md:h-12 mr-2" />
                {/* <img src={localStorage.getItem('role')== "Admin"? logo : user} alt="logo" className="h-8 md:h-12 mr-2" /> */}
                <ul className="flex items-center gap-3">
                    <li className="text-xl font-semibold">{localStorage.getItem('role')=='Admin' ? 'Hamroyev Sh.':`@${localStorage.getItem('username')}`}</li>
                    {/* <li><RxHamburgerMenu size={28}/></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar