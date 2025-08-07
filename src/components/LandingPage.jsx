import React from 'react'
import { handleLogin } from '../services/auth'

function LandingPage() {
    return (
        <>
            <section className='min-h-screen flex justify-center flex-col bg-[url("/background-gradient.png")] bg-cover text-white'>
                <div className='ml-10 m-auto sm:ml-12 md:ml-20 lg:ml-32 xl:ml-40'>
                    <h1 className='text-6xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold'>BeatStat_</h1>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-light my-6 sm:my-8 md:my-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mb-20'>Unlock your Spotify story. Dive into your stats, playlists, and musical journey like never before.</p>
                    <button 
                        className='mt-4 sm:mt-6 md:mt-8 text-white p-4 sm:p-5 md:p-6 border-2 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-white hover:text-black transition duration-300'
                        onClick={handleLogin}
                    >
                        Get Started!
                    </button>
                </div>

            </section>
        </>
    )
}

export default LandingPage