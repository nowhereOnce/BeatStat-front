import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import LogoutButton from "./LogoutButton";

function NavLinks(){
    return (
        <div className="md:flex-row text-center text-lg font-semibold w-full flex flex-col justify-evenly">
            <NavLink to={"/me"} className="m-2 opacity-50 hover:opacity-100 transition-color duration-200 ease-in-out">Tracks</NavLink>
            <NavLink to={"/me"} className="m-2 opacity-50 hover:opacity-100 transition-color duration-200 ease-in-out">Artist (soon)</NavLink>
            <NavLink to={"/me"} className="m-2 opacity-50 hover:opacity-100 transition-color duration-200 ease-in-out">Playlist (soon)</NavLink>
            <LogoutButton></LogoutButton>
        </div>
    )
}

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex-wrap px-6 py-4 bg-transparent sticky top-0 z-[20] mx-auto flex w-full items-center justify-between text-white">
            <h1 className="font-bold text-3xl m-2 opacity-50">BeatStat_</h1>
            <div className="hidden md:flex w-1/2">
                <NavLinks></NavLinks>
            </div>

            <div className="z-[10] md:hidden opacity-50 hover:opacity-100 hover:text-white transition-all duration-200">
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} rounded/>
            </div>
            {/* Menú móvil con animación simple */}
            <div className={`
                basis-full md:hidden overflow-hidden
                transition-all duration-600 ease-in-out
                ${isOpen ? 'max-h-42 opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <NavLinks></NavLinks>
            </div>
        </header>
    );
}