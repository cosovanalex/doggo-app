import React from 'react';
import styles from '../main.css';
import videoSource from '../assets/animations/2.mp4';

const VideoBackground = () => {
  return (
    <div className="videoBackground">
      <video autoPlay="autoplay" loop="loop" muted className="search-video">
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
