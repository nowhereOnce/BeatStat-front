import React from "react";
import { useState } from "react";

export default function List({ data }) {

    const [showAll, setShowAll] = useState(false)

    return (
        <div className="flex flex-col">
            <div 
            className="text-white flex flex-col z-1">
                <ul 
                    className={
                        `${showAll ? "max-h-[2000px]" : "max-h-[430px]"
                        } w-[340px] overflow-hidden my-auto transition-all duration-1000 ease-in-out`}>
                    {data?.tracks?.map((track, index) => (
                        /* each track */
                        <li key={index} className="flex m-5 my-7">
                            <span className="text-2xl font-bold w-10 text-right mr-4">{index + 1}.</span>
                            <img 
                                src={track.image} 
                                alt={`Portada de ${track.name}`} 
                                className = "w-[50px] h-[50px] object-cover"
                            />
                            <div className="ml-3 max-w-[160px]">
                                <h3 className='font-bold text-sm max-h-[48px]'>{track.name}</h3>
                                <p className="text-xs">{track.artist}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                    onClick={() => setShowAll(!showAll)}
                    className="z-1 mx-auto mt-8 mb-15 cursor-pointer text-white p-2 border-2 rounded-full text-sm hover:bg-white hover:text-black transition duration-300 w-40"
                >
                {showAll ? "Show less" : "Show more"}
                </button>
        </div>
        
    );
}