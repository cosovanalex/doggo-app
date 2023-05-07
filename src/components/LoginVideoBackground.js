import React from 'react';
import '../main.css';
import videoSource from '../assets/animations/1.mp4';

const LoginVideoBackground = () => {
  return (
    <div className="login-video-background">
      <video autoPlay="autoplay" loop="loop" muted className="login-video">
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoginVideoBackground;
