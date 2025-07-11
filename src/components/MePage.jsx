import React from 'react'
import { useQuery } from '@tanstack/react-query'
import List from './List';

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
            <div className="absolute inset-0 z-0 bg-[url('background-gradient.png')] bg-cover filter grayscale-40"></div>

            {/* Gigant Title */}
            <h1 className="absolute left-15 top-75 -translate-y-1/2 text-[6rem] font-black text-black opacity-20 pointer-events-none select-none text-right">
                Your<br />Top<br />Tracks
            </h1>

            {/* Tracks List */}
            <List data={data}></List>

            {/* Artists image container:
            This renders every artist image in reverse order
            (because of the z-index seem broken when trying to modify the top appering elements) 
            applies a 3d transformation and adds a shadow
            */}
            <div className="absolute right-50 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none grayscale flex flex-col-reverse">
            {[...(data?.tracks || [])].slice(0,5).reverse().map((track, index) => (    
                <div key={index} className={`relative -my-20 ${index % 2 === 0 ? '-translate-x-[20px]' : 'translate-x-[80px]'}`}>
                <img
                    src={track.artist_image}
                    alt={`This is ${track.name}`}
                    className="w-[300px] h-[300px] object-cover rounded-3xl rotate-x-50 rotate-z-45 drop-shadow-[20px_20px_10px_rgba(0,0,0,0.8)]"
                />
                </div>
            ))}
            </div>

        </section>
    );
};