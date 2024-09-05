'use client';
import React from 'react';
import Particles from '../components/Particles';
import { Container } from '@mui/material';


export default function Home() {
  return (
    <Container sx={{display: "flex" ,flexDirection: "column",  alignItems : "center" , justifyContent: "center"}}>
      <Particles id="tsparticles" />
    </Container>
  );
}
