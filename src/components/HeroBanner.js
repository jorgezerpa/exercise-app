import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroDeskImage from '../assets/images/heroDesk.png';
import HeroMobImage from '../assets/images/heroMob.png';

const HeroBanner = () => (
  <Box sx={{ position: 'relative', width: '100%', minHeight: '95vh' }} p="20px">
    <Box sx={{ zIndex:100, top:0, bottom: 0, left:0, right:0, position: 'absolute', background: `linear-gradient(-10deg, transparent 0%, transparent 40%, #132925 40.001%, #212C2D 100%)`}} ></Box>
    <Box sx={{ zIndex:100, top:0, bottom: 0, left:0, right:0, position: 'absolute', p:{xs:'6rem 2rem', xs2:'6rem 5rem',sm:'8rem 10rem', lg:'8rem 15rem'} }} >
        <Typography sx={{ color:'#ccc', fontSize: { xs:'1rem',xs2:'1.1rem', sm:'1.3rem' } }} variant='h5' >Find your Limits, then</Typography>
        <Typography sx={{ color:'#fff', fontSize: { xs:'2.5rem',xs:'2.8rem', sm:'3.5rem' }, fontWeight:'bold' }} variant='h2'>Break It!</Typography>
        <Button onClick={()=>{window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });}} sx={{ mt:3, fontSize: {xs: '.7rem',sm:'.8rem'}, padding:{xs: '.3rem .7rem',sm:'.5rem .8rem'}, background:'linear-gradient(#1FE9E9, #1FBEBE)', color: '#fff', fontWeight: 'bold', borderRadius:'.7rem' }} >Explore</Button>
        {/* <Typography sx={{ display: {xs:'none', sm2: 'block'}, color:'#333', mt:'6rem' }} variant='h6'>"Tell the weak that he is strong <br/> and you will see him make strenght </Typography> */}
    </Box>
    <Box sx={{display: {xs:'none', sm2: 'block'}, zIndex:100, top: '60px', right:0, position: 'absolute', width: { xs:'0',sm2:'400px', md:'550px', lg:'650px' }}} >
        <img width="100%" src={HeroDeskImage} alt='' />        
    </Box>
    <Box sx={{display: {xs:'block', sm2: 'none'}, zIndex:100,bottom:'-100px', right:0, position: 'absolute', width: {xs:'170px', sm:'200px'} }} >
        <img width="100%" src={HeroMobImage} alt='' />        
    </Box>


  </Box>
);

export default HeroBanner;