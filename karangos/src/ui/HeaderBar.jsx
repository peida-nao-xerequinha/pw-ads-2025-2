import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import logotipo from '../assets/karangos-logo-600px.png'

import MainMenu from './MainMenu'

export default function HeaderBar() {
  return (
    <Box sx={{ width: '100vw' }}>
      <AppBar 
        position="static" 
        enableColorOnDark
        sx={{ width: '100vw', left: 0, right: 0 }}
      >
        <Toolbar 
          variant="dense"
          sx={{ justifyContent: 'flex-start', alignItems: 'center' }} 
        >
          <MainMenu />
          <a href="/">
            <img 
              src={logotipo} 
              alt="Logotipo Karangos" 
              title="Karangos • Os velhinhos são nossa paixão"
              style={{ width: '300px' }} 
            />
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
