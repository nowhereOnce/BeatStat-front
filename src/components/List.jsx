import { useState } from "react"


export default function List({ data }) {

    const [showAll, setShowAll] = useState(false);

    // Makes sure there's data to prevent errors
    const tracks = data?.tracks || [];

    const shownTracks = showAll ? tracks : tracks.slice(0, 5);

    return(
        <div className='text-white flex flex-col z-10'>
            <ul className={`my-auto transition-all duration-500 h-[550px] w-max[500px]"}`}>
                {shownTracks.map((track, index) => (
                    /* each track */
                    <li key={index} className={`flex ${showAll ? "m-2" : "m-7 "}`}>
                        <span className={`font-bold w-20 text-right ${showAll ? "text-3xl mr-3" : "text-5xl mr-6"}`}>
                            {index + 1}.
                        </span>
                        <img 
                            src={track.image} 
                            alt={`Portada de ${track.name}`} 
                            className={`${showAll ? "w-[40px] h-[40px] object-cover" : "w-[70px] h-[70px]"}`}
                        />
                        <div className="ml-4">
                            <h3 className={`font-bold ${showAll ? "text-l" : "text-xl"}`}>{track.name}</h3>
                            <p className={`${showAll ? "text-sm" : ""}`}>{track.artist}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Show more/less button */}
            {tracks.length > 5 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mx-auto text-white p-2 border-2 rounded-full text-sm hover:bg-white hover:text-black transition duration-300 w-40"
                >
                {showAll ? "Show less" : "Show more"}
                </button>
            )}

        </div>
    )
}