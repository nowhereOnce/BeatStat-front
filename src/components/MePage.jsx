import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import List from './List';
import RangeSelect from './RangeSelect'
import Menu from './Menu';
import BackgroundGradient from './BackgroundGradient';
import { fetchTracks } from '../services/fetchTracks';
import Images3DContainer from './Images3DContailer';

const options = [
  { value: 'short_term', label: '4 weeks' },
  { value: 'medium_term', label: '6 months' },
  { value: 'long_term', label: '12 months' }
]


export default function MePage() {

    const [selectedOption, setSelectedOption] = useState(options[0]); // Time range select
    const [gradientContainer, setGradientContainer] = useState(null);

    useEffect(() => {
        // Creates a container for the gradient
        const container = document.createElement('div');
        container.id = 'gradient-background';
        document.body.appendChild(container);
        setGradientContainer(container);

        // Cleanup al desmontar
        return () => {
        if (container && document.body.contains(container)) {
            document.body.removeChild(container);
        }
        };
    }, []);


    const { data, isLoading, error } = useQuery({
        queryKey: ['tracks', selectedOption], // Identifier for the query
        queryFn: () => fetchTracks(selectedOption.value), // Function to make the call
    });
    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return(
        <>
            {/* Render gradient in the portal */}
            {gradientContainer && createPortal(
                <BackgroundGradient />,
                gradientContainer
            )}

            <section className='relative min-h-screen flex flex-col flex-auto justify-start items-center overflow-hidden'>

                <Menu></Menu>
                {/* Gigant Title + Select time range */}
                <div className='md:absolute md:left-[2vw] md:top-40 md:text-lg z-10 flex flex-col mr-auto ml-5 p-5 gap-5'>
                    <h1 className="md:w-[22vw] md:text-[5vw] text-[3rem] font-black text-black opacity-40 pointer-events-none select-none">
                        Your Top<br />Tracks
                    </h1>
                    <RangeSelect 
                        options={options} 
                        onChange={(option) => setSelectedOption(option)}
                        selectedOption={selectedOption} > 
                    </RangeSelect>
                </div>
                <List data={data}></List>
                <Images3DContainer data={data}></Images3DContainer>

            </section>
        </>
    );
};