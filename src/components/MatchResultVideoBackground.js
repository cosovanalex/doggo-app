import React from 'react';
import videoSource from '../assets/animations/3.mp4';

const MatchResultVideoBackground = () => {
  return (
    <div
      className="match-result-video-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="match-result-video"
        style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
        }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default MatchResultVideoBackground;
