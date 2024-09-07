'use client';
import React from 'react';
import Particles from './Particles';
import { Container } from '@mui/material';
import Form from "./Form";


export default function Home() {
  return (
    <Container sx={{display: "flex" ,flexDirection: "column", backgroundImage: "url('/ti_logo.png')" , backgroundRepeat: "no-repeat" , backgroundPosition: "center" , backgroundSize: "contain" , alignItems : "center" , justifyContent: "center"}}>
      <Form />
      <Particles id="tsparticles" />
    </Container>
  );
}
