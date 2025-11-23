import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';
import SportsBarIcon from '@mui/icons-material/SportsBar';

export default function FooterBar() {
  return <>
    <Box
      component="footer"
      sx={{
        backgroundColor: 'action.disabledBackground',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',  // posição fixa
        bottom: 0,          // na parte de baixo da página
        width: '100vw'
      }}
    >
      <Typography 
        variant="caption"
        sx={{
          textAlign : 'center',
          '& a': {  // Altera a cor do link (a) dentro do Typography (&)
            color: 'secondary.light'
          }
        }}
      >
        Desenvolvido e mantido com 
        <SportsBarIcon 
            fontSize="small" 
            sx={{ verticalAlign: 'middle',
            ml:0.2,
            mr:0.4 }}
        /> 
        por Pedro Henrique Neves Tries
      </Typography>
    </Box>
  </>
}