'use client';
import React from 'react';
import Particles from '../components/Particles';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Raleway} from 'next/font/google';
import Link from '@mui/material/Link';

const montserrat = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container sx={{display: "flex" ,flexDirection: "column",  alignItems : "center" , justifyContent: "center"}}>
        <Box sx={{ width: "45vw", mt : "15%" ,  height: "30vh", border: "1px solid #98DED9" , p:9 , borderRadius:8 , boxShadow: '0px 0px 10px 15px rgba(15, 25, 32, 0.7)'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop={5}>
            <Typography sx={{color:"#98DED9" , textAlign:"center" , fontWeight:"bold", fontFamily: montserrat.style , fontSize:"36px"}} level="body1">FORM SUBMITTED SUCCESSFULLY!</Typography>
            <Link
              href='/'
              sx={{
                fontFamily: montserrat.style,
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "0",
                color: "#70a3f0",
                borderRadius: "10px",
                mt: 6,
                '&:hover': {
                  color: "#ffffff",
                  transition: 'color 0.2s ease-in-out',
                },
                whiteSpace: 'normal',
                wordWrap: 'break-word'
              }}
            >
              Submit Another Response
            </Link>
        </Box>
      <Particles id="tsparticles" />
    </Container>
  );
}
