import React from 'react';
import video from './2160p.mov';
import './index.css';

export default function Home() {
  return (
      <div class="home">
        <video
            autoPlay
            muted
            loop
            src = {video}
            style={{
              // position: "absolute",
              width: "100%",
              left: 0,
              top: 0,
              opacity: 0.4,
              zIndex: -1,
            }} 
            >          
        </video>

        <div>
            <h1 style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: 'Quicksand, sans-serif',
            color: "white",
            zIndex: 1,
            }}>Welcome :)</h1>
        </div>
      </div>
  );
};