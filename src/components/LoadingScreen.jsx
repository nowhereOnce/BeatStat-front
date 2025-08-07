import React from 'react';
import BackgroundGradient from './BackgroundGradient';
import { ScaleLoader } from 'react-spinners';

export default function LoadingScreen() {
  return (
    <>
        <div style={styles.container} className='z-50'>
            <ScaleLoader color="#ffffff" />
            <p style={styles.message}>Loading your music journey...</p>
        </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: 'white',
    textAlign: 'center',
    gap: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginTop: '1rem',
  },
};
