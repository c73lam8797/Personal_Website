import React from 'react';
import video from './2160p.mov';
import './index.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home" id="home">
      <video
          autoPlay
          muted
          loop
          src = {video}
          style={{
            width: "100%",
            left: 0,
            top: 0,
            opacity: 0.4,
          }} 
          >          
      </video>

      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
      }}>
          <h1 style={{
          fontFamily: 'Quicksand, sans-serif',
          color: "white",
          fontSize: "50px",
          verticalAlign: "middle",
          }}>Charmaine Lam</h1>
          <h3 style={{
            fontFamily: 'Quicksand, sans-serif',
          }}>idk what to put here</h3>
      </div>
    </div>
  );
};