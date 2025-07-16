import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react'
import { useState } from "react";

function NavLinks(){
    return (
        <div className="md:flex-row text-center text-lg font-semibold w-full flex flex-col justify-evenly">
            <NavLink to={"/me"} className="m-2 transition">Tracks</NavLink>
            <NavLink to={"/me"} className="m-2">Artist</NavLink>
            <NavLink to={"/me"} className="m-2">Playlist</NavLink>
        </div>
    )
}

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex-wrap px-6 py-4 bg-transparent opacity-50 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between">
            <h1 className="font-bold text-white text-3xl m-2">BeatStat_</h1>
            <div className="hidden md:flex w-1/2">
                <NavLinks></NavLinks>
            </div>

            <div className="z-[10] md:hidden">
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} rounded/>
            </div>
            {/* Menú móvil con animación simple */}
            <div className={`
                basis-full md:hidden overflow-hidden
                transition-all duration-600 ease-in-out
                ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <NavLinks></NavLinks>
            </div>
        </header>
    );
}