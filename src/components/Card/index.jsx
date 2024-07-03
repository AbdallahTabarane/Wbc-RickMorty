import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LaunchIcon from '@mui/icons-material/Launch';
import Status from '../Status';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function CharCard({ character }) {
  const navigate = useNavigate();
  const [color, setColor] = useState('gray');
  useEffect(() => {
    // Vérifier si le personnage est déjà dans les favoris au montage
    const favUsers = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favUsers.find((favUser) => favUser.name === character.name)) {
      setColor('red');
    }
  }, [character]);

  const userFav = (character) => {
    let favUsers = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favUsers.find((favUser) => favUser.name === character.name)) {
      favUsers = favUsers.filter(fav => fav.name !== character.name);
      setColor('gray');
      console.log(`local "${character}" removed from favorites.`);
    } else {
      favUsers.push(character);
      setColor('red');
      console.log(`Character "${character}" added to favorites.`);
    }
    localStorage.setItem('favorites', JSON.stringify(favUsers));
    console.log('local',favUsers);
  };

  const handleClick = () => {
    userFav(character);
  };

  return (
    <Card sx={{
      width: 345,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <CardHeader
        action={
          <>
          <IconButton
            onClick={handleClick}
            aria-label="add to favorites"
            sx={{ color: color }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
          onClick={()=>navigate(`/character/${character.id}`)}>
       
            <LaunchIcon />
        
          </IconButton>
          </> 
        }
        title={character.name}
        subheader={<Status status={character.status} />}
      />
      <Box>
        <CardMedia
          component="img"
          height="194"
          image={character.image}
          alt={`${character.name}`}
        />
      </Box>
    </Card>
  );
}
