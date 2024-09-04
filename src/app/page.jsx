'use client';
import React from 'react';
import Particles from './components/Particles';
import { Container } from '@mui/material';
import Form from "./components/Form";


export default function Home() {
  return (
    <Container sx={{display: "flex" ,flexDirection: "column",  alignItems : "center" , justifyContent: "center"}}>
      <Form />
      <Particles id="tsparticles" />
    </Container>
  );
}
