import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const route = window.location.href;
console.log(route)

import Logo from '../assets/icons/logo.png';

const Navbar = () => (
  <Stack direction="row" sx={{ position: 'absolute', zIndex: 1000, width: '95%', margin: 'auto', alignItems: 'center', justifyContent: 'space-between', gap: 1, mt: '1rem' }}>
    <Link to="/">
      <img src={Logo} alt="logo" style={{ marginLeft:'20px', width: '48px', height: '48px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontSize="1rem"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
