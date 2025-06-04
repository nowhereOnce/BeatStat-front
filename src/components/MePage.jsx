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
        <section className='min-h-screen flex justify-center bg-[url("background-gradient.png")] bg-cover'>
            <div className='text-white'>
                <h2 className='8x1 font-bold w-md'>This is another route from my page</h2>
                <ul>
                    {data?.tracks?.map((track, index) => (
                    <li key={index} className="track-item">
                        <img 
                        src={track.image} 
                        alt={`Portada de ${track.name}`} 
                        width="100" 
                        height="100" 
                        />
                        <div className="track-info">
                        <h3>{track.name}</h3>
                        <p>{track.artist}</p>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};