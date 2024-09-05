'use client';
import React from 'react';
import Particles from '../components/Particles';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Raleway} from 'next/font/google';

const montserrat = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container sx={{display: "flex" ,flexDirection: "column",  alignItems : "center" , justifyContent: "center"}}>
        <Box sx={{ width: "45vw", mt : "15%" ,  height: "30vh", border: "1px solid #98DED9" , p:6 , borderRadius:8 , boxShadow: '0px 0px 10px 15px rgba(15, 25, 32, 0.7)'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop={5}>
            <Typography sx={{color:"#98DED9" , textAlign:"center" , fontWeight:"bold", fontFamily: montserrat.style , fontSize:"36px"}} level="body1">FORM SUBMITTED SUCCESSFULLY!</Typography>
            <Button href='/' sx={{width:"30vw", height:"60px" , fontSize:"24px"  , fontWeight:"bold", letterSpacing:"0" ,  backgroundColor:"#ADD8E6" , color:"#193249" , borderRadius:"10px" , mt:6 , '&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.15s ease-in-out'} , boxShadow: '0px 0px 10px 10px rgba(15, 25, 32, 0.7)'}}>Submit Another Response</Button>
        </Box>
      <Particles id="tsparticles" />
    </Container>
  );
}
