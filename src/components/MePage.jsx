import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import List from './List';
import RangeSelect from './RangeSelect'

const options = [
  { value: 'short_term', label: '4 weeks' },
  { value: 'medium_term', label: '6 months' },
  { value: 'long_term', label: '12 months' }
]

export default function MePage() {

    const [selectedOption, setSelectedOption] = useState(options[0]); // Time range select

    const fetchTracks = async () => {
        const response = await fetch(
            `http://localhost:8000/me/top-tracks?time_range=${selectedOption.value}`, 
            {credentials: 'include'}
        );
        if (!response.ok) throw new Error('Error fetching posts');
        return response.json();
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['tracks', selectedOption], // Identifier for the query
        queryFn: fetchTracks, // Function to make the call
    });
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <section className='relative min-h-screen flex flex-col flex-auto justify-start items-center overflow-hidden'>
            
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-[url('background-gradient.png')] bg-cover filter grayscale-40"></div>

            {/* Gigant Title + Select time range */}
            <div className='z-10 flex flex-col mr-auto ml-5 p-5 gap-5'>
                <h1 className="text-[3rem] font-black text-black opacity-30 pointer-events-none select-none">
                    Your Top<br />Tracks
                </h1>
                <RangeSelect 
                    options={options} 
                    onChange={(option) => setSelectedOption(option)}
                    selectedOption={selectedOption} > 
                </RangeSelect>
            </div>

            {/* Tracks List */}
            <List data={data}></List>

            {/* Artists image container:
            This renders every artist image in reverse order
            (because of the z-index seem broken when trying to modify the top appering elements) 
            applies a 3d transformation and adds a shadow
            */}
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none grayscale flex flex-col-reverse">
            {[...(data?.tracks || [])].slice(0,5).reverse().map((track, index) => (    
                <div key={index} className={`relative -my-10 ${index % 2 === 0 ? '-translate-x-[20px]' : 'translate-x-[10px]'}`}>
                <img
                    src={track.artist_image}
                    alt={`This is ${track.name}`}
                    className="w-[200px] h-[200px] object-cover rounded-3xl rotate-x-50 rotate-z-45 drop-shadow-[20px_20px_10px_rgba(0,0,0,0.8)]"
                />
                </div>
            ))}
            </div>

        </section>
    );
};