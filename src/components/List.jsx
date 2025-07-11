import React from "react";
import { useState } from "react";

export default function List({ data }) {

    const [showAll, setShowAll] = useState(false)

    return (
        <div className="flex flex-col my-[54.4px]">
            <div 
            className="text-white flex flex-col z-10">
                <ul 
                    className={
                        `${showAll ? "max-h-[2000px]" : "max-h-[540px]"
                        } w-[600px] overflow-hidden my-auto transition-all duration-700 ease-in-out`}>
                    {data?.tracks?.map((track, index) => (
                        /* each track */
                        <li key={index} className="flex m-6">
                            <span className="text-6xl font-bold w-20 text-left mr-1">{index + 1}.</span>
                            <img 
                                src={track.image} 
                                alt={`Portada de ${track.name}`} 
                                className = "w-[80px] h-[80px] object-cover"
                            />
                            <div className="ml-4">
                                <h3 className='font-bold text-2xl'>{track.name}</h3>
                                <p>{track.artist}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button
                    onClick={() => setShowAll(!showAll)}
                    className="z-10 mx-auto my-3 text-white p-2 border-2 rounded-full text-sm hover:bg-white hover:text-black transition duration-300 w-40"
                >
                {showAll ? "Show less" : "Show more"}
                </button>
        </div>
        
    );
}