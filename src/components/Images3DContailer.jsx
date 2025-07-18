import React from "react"

/* Artists image container:
This renders every artist image in reverse order
(because of the z-index seem broken when trying to modify the top appering elements) 
applies a 3d transformation and adds a shadow
*/

export default function Images3DContainer({ data }) {
    return (
        <div className="absolute md:right-10 -right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none grayscale flex flex-col-reverse z-[10]">
            {[...(data?.tracks || [])].slice(0,5).reverse().map((track, index) => (    
                <div key={index} className={`relative md:-my-20 -my-10 ${index % 2 === 0 ? '-translate-x-[20px]' : 'md:translate-x-[80px] translate-x-[10px]'}`}>
                <img
                    src={track.artist_image}
                    alt={`This is ${track.name}`}
                    className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] object-cover rounded-3xl rotate-x-50 rotate-z-45 drop-shadow-[20px_20px_10px_rgba(0,0,0,0.8)]"
                />
                </div>
            ))}
        </div>
    )
}