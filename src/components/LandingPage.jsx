import React from 'react'
import { handleLogin } from '../services/auth'

function LandingPage() {
    return (
        <>
            <section className='min-h-screen flex justify-center flex-col bg-[url("background-gradient.png")] bg-cover text-white'>
                <div className='ml-40'>
                    <h1 className='text-8xl font-bold '>BeatStat</h1>
                    <p className='text-3xl font-light my-10 w-2xl'>Unlock your Spotify story. Dive into your stats, playlists, and musical journey like never before.</p>
                    <button 
                        className='mt-8 text-white p-6 border-2 rounded-full text-2xl hover:bg-white hover:text-black transition duration-300'
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