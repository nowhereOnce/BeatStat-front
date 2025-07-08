import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchTracks = async () => {
    const response = await fetch('http://localhost:8000/me/top-tracks', {credentials: 'include'});
    if (!response.ok) throw new Error('Error fetching posts');
    return response.json();
};

export default function MePage() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['tracks'], // Identifier for the query
        queryFn: fetchTracks, // Function to make the call
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>

    return(
        <section className='relative min-h-screen flex justify-center items-center overflow-hidden'>
            
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-[url('background-gradient.png')] bg-cover filter grayscale-50"></div>
            {/* Gigant Title */}
            <h1 className="absolute left-20 top-1/2 -translate-y-1/2 text-[7rem] font-black text-white opacity-10 pointer-events-none select-none text-right">
                Your<br />Top<br />Tracks
            </h1>

            <div className='text-white flex z-10'>
                <ul className='my-auto'>
                    {data?.tracks?.map((track, index) => (
                        /* each track */
                        <li key={index} className="flex m-8">
                            <span className="text-6xl font-bold w-20 text-right mr-6">{index + 1}.</span>
                            <img 
                                src={track.image} 
                                alt={`Portada de ${track.name}`} 
                                width="80" 
                                height="80" 
                            />
                            <div className="ml-4">
                                <h3 className='font-bold text-2xl'>{track.name}</h3>
                                <p>{track.artist}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
};