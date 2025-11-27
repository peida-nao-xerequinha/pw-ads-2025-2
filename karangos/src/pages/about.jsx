import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';

function lazyLikesInitializer() {
  const storedLikes = localStorage.getItem('likes');
  return parseInt(storedLikes) || 0;
}

import autor from '../assets/autor.jpeg';

export default function About() {
  const [likes, setLikes] = useState(lazyLikesInitializer);

  useEffect(() => {
    localStorage.setItem('likes', likes.toString());
  }, [likes]);

  const handleLikeClick = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sobre o autor
      </Typography>

      <Card sx={{ maxWidth: 345, backgroundColor: 'background.paper' }}>
        
        <CardMedia
          component="img"
          image={autor} 
          alt="picture"
          sx={{ height: 300, objectFit: 'cover' }}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pedro Henrique Neves Tries
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            Sou estudante de Análise e Desenvolvimento de Sistemas, e estou aprendendo a construir aplicações web nesta matéria. Em casa, estou estudando Python e pretendo começar a estudar Java nestas férias.
          </Typography>
        </CardContent>

        <CardActions>
          <Button 
            size="small" 
            variant="contained" 
            color="secondary"
            onClick={handleLikeClick}
          >
            <FavoriteIcon fontSize="small" sx={{ mr: 1 }} />
            CURTIR ({likes})
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}