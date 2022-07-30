import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import upperarms from '../assets/icons/arm.png';
import back from '../assets/icons/back.png';
import lowerlegs from '../assets/icons/calf.png';
import chest from '../assets/icons/chest.png';
import lowerarms from '../assets/icons/foream.png';
import cardio from '../assets/icons/heart.png';
import upperlegs from '../assets/icons/leg.png';
import neck from '../assets/icons/neck.png';
import shoulders from '../assets/icons/shoulder.png';
import waist from '../assets/icons/waist.png';

const icons = {
  upperarms,
  back,
  lowerarms,
  lowerlegs,
  chest,
  cardio,
  upperlegs,
  neck,
  shoulders,
  waist
}

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #132925', background: '#fff', borderBottomLeftRadius: '20px', width: '150px', height: '150px', cursor: 'pointer', gap: '10px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '150px', height: '150px', cursor: 'pointer', gap: '10px' }}
    onClick={() => {
      setBodyPart(item);
      // window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={icons[item.split(" ").join("")] || Icon } alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="1.2rem" fontWeight="bold" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;
