import React from "react";
import { useState } from "react";

export default function List({ data }) {

    const [showAll, setShowAll] = useState(false)

    return (
        <div className="md:w-[35vw] md:min-w-[350px] md:mt-10 flex flex-col z-[10]">
            <div 
            className="text-white flex flex-col">
                <ul 
                    className={
                        `${showAll ? "max-h-[2000px]" : "md:max-h-[460px] max-h-[410px]"
                        } md:w-full w-[340px] overflow-hidden my-auto transition-all duration-1000 ease-in-out`}>
                    {data?.tracks?.map((track, index) => (
                        /* each track */
                        <li key={index} className="md:max-h-[60px] flex m-5 my-7 max-h-[50px]">
                            <span className="md:flex-shrink-0 md:text-4xl text-2xl font-bold w-10 text-right mr-4">{index + 1}.</span>
                            <img 
                                src={track.image} 
                                alt={`Portada de ${track.name}`} 
                                className = "md:w-[60px] md:h-[60px] w-[50px] h-[50px] object-cover"
                            />
                            <div className="ml-3 max-w-full">
                                <h3 className='md:text-xl md:max-h-[56px] line-clamp-2 font-bold text-sm max-h-[40px]'>{track.name}</h3>
                                <p className="md:text-sm line-clamp-1 text-xs">{track.artist}</p>
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