import React from 'react';
import video from './2160p.mov';
import './index.css';
import './home.css';

export default function Home() {
  return (
    <div className="home" id="home">
      <video
          autoPlay
          muted
          loop
          src = {video}
          >          
      </video>

      <div id="content">
          <h1>Charmaine Lam</h1>
          <h3>idk what to put here</h3>
      </div>
    </div>
  );
};