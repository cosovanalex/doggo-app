import React from 'react';
import { Animated } from 'react-animated-css';
import MatchResultVideoBackground from './MatchResultVideoBackground';

const MatchResult = ({ dog }) => {
  return (
    <>
      <MatchResultVideoBackground />
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, calc(-50% + 150px))',
          zIndex: 1,
        }}
      >
        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
          <div
            style={{
              maxWidth: '400px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              backgroundColor: '#77A1D9',
              color: 'white',
              border: '3px solid #314259',
            }}
          >
            <img src={dog.img} alt={dog.name} style={{ width: '100%', borderRadius: '4px' }} />
            <p
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: '1rem',
                fontFamily: 'Helvetica',
              }}
            >
              {dog.name}
            </p>
            <p style={{ fontFamily: 'Helvetica',fontSize: '1.25rem' }}>Breed: {dog.breed}</p>
            <p style={{ fontFamily: 'Helvetica',fontSize: '1.25rem' }}>Age: {dog.age}</p>
            <p style={{ fontFamily: 'Helvetica',fontSize: '1.25rem' }}>Zip Code: {dog.zip_code}</p>
          </div>
        </Animated>
      </div>
    </>
  );
};

export default MatchResult;
