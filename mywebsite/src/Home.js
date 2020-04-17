import React from 'react';
import video from './2160p.mov'

export default function Home() {
  return (
      <div>
        <video
            autoPlay
            muted
            loop
            src = {video}
            style={{
              position: "fixed",
              width: "100%",
              left: 0,
              top: 0,
              opacity: 0.5
            }} 
            >          
        </video>
        <h1 style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: 'Quicksand, sans-serif',
          color: "white",
        }}>Welcome :)</h1> 
      </div>
  );
};