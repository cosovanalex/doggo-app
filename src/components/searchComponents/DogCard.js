import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const DogCard = ({ dogs, handleDogCardClick, selectedDogCard, toggleFavorite, favorites }) => {
  return (
    <div className="row dog-cards-container">
      {dogs.map((dog) => (
        <div key={dog.id} className="col-sm-6 col-md-4 col-lg-3">
          <Card
            onClick={() => handleDogCardClick(dog.id)}
            className={`dog-card ${selectedDogCard === dog.id ? 'selected dog-card-top-layer' : ''}`}
          >
            <CardMedia
              component="img"
              height="200"
              image={dog.img}
              alt={dog.name}
            />
            <CardContent className='card-content'>
              <Typography gutterBottom variant="h6" component="div">
                {dog.name}
              </Typography>
              <Typography variant="body2">
                Breed: {dog.breed}
              </Typography>
              <Typography variant="body2">
                Age: {dog.age}
              </Typography>
              <Typography variant="body2">
                Zip Code: {dog.zip_code}
              </Typography>
            </CardContent>
            <CardActions className='favorite-card'>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="favorite"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleFavorite(dog.id);
                }}
              >
                <FavoriteIcon
                  sx={{ color: favorites.has(dog.id) ? '#F29F05' : 'action' }}
                />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DogCard;
