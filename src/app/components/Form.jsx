'use client';
import { Box, TextField } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import departments from './departments';
import Autocomplete from '@mui/material/Autocomplete';
import courses from './courses';
import {Raleway} from 'next/font/google';

const montserrat = Raleway({ subsets: ["latin"] });

export default function Form() {

  function isScreenSmall() {
    if(typeof window !== 'undefined'){
      return window.innerWidth <= 500;
    }
    return false;
  }

  const [isSmallScreen, setIsSmallScreen] = React.useState(isScreenSmall());

  React.useEffect(() => {
    const handleResize = () => setIsSmallScreen(isScreenSmall());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [formData, setFormData] = React.useState({
    name: '',
    email:'',
    department: '',
    course_name: '',
    link: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.email === ""){
      alert("Please fill email!");
    } else if(formData.name === ""){
      alert("Please fill name!");
    }else if(formData.department===""){
      alert("Please fill Department!")
    }else if(formData.course_name===""){
      alert("Please fill course name!")
    }else if(formData.link===""){
      alert("Please fill link!");
    }else{
        const submissionData = {
            "entry.1914479458": formData.name,
            "entry.1140423365": formData.email,
            "entry.688139060" : formData.department,
            "entry.346488187": formData.course_name,
            "entry.1163931876": formData.link,
        };
        const response = await axios.post('https://videosubmissionform-aahil-khans-projects.vercel.app/api/send_data',submissionData);
        window.location.href = '/submit';
    }

    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(isSmallScreen);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "70vw", height: "100%", border: "1px solid #98DED9" , p:5 , borderRadius:8 , boxShadow: '0px 0px 10px 2px rgba(168, 252, 254,0.7)'}} display="flex" flexDirection="column" alignItems="center" justifyContent="top" marginTop={5}>
        <img style={{ marginTop: "0px" , width:"100%"  , height:isSmallScreen ? "150px" :"270px" , borderRadius:8}} src={"/banner.png"} width={100} height={100} alt='image' />
        <Box sx={{width : "100%" , mt : "10px", p: 1, borderRadius: 3}} display="flex" flexDirection="column" alignItems="center">
          
          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#98DED9", fontFamily: montserrat.style , fontSize:"36px"}} level="body1">NAME</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#98DED9" , fontSize: "19px" } , mt:3 , mb:3, backgroundColor: '#193249' , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9'} ,'&:hover': {backgroundColor: '#131d2b' , transition: 'background-color 0.15s ease-in-out'}} ,boxShadow: '0px 0px 2px 1px rgba(168, 252, 254,0.7)'}} style={{width:"55vw"}} id="name" name="name" variant="outlined" onChange={handleChange} value={formData.name}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#98DED9" , fontFamily: montserrat.style , fontSize:"36px"}} level="body1">EMAIL</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#98DED9" , fontSize: "19px"} , mt:3 , mb:3 , backgroundColor: '#193249' , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9'} ,'&:hover': {backgroundColor: '#131d2b' , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '0px 0px 2px 1px rgba(168, 252, 254,0.7)'}} style={{width:"55vw"}} id="email" name="email" variant="outlined" onChange={handleChange} value={formData.email} />
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#98DED9", fontFamily: montserrat.style , fontSize:"36px"}} level="body1">DEPARTMENT</Typography>

            <Autocomplete
            sx={{mt:3}}
            style={{width:"55vw"}}
            size='small'
            id="department"
            name='department'
            options={departments.map((option) => option.name)}
            renderInput={(params) => 
              <TextField {...params} sx={{input:{color: "#98DED9" , fontSize: "19px"} , mb:3, backgroundColor: '#193249' , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9'} ,'&:hover': {backgroundColor: '#131d2b' , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '0px 0px 2px 1px rgba(168, 252, 254,0.7)'}} variant="outlined" />
            }
            paperprops={{
              style: {
                backgroundColor: "#FFF",
              },
            }}
            ListboxProps={{
              style: {
                backgroundColor: "#263752",
                color:"#98DED9"
              },
            }}
            onChange={(event, newValue) => setFormData((prevState) => ({
              ...prevState,
              department: newValue,
            }))}
            value={formData.department}
          />
          </Box>

        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#98DED9" ,textAlign:"center" , fontFamily: montserrat.style , fontSize:"36px"}} level="body1">COURSE NAME</Typography>

          <Autocomplete
            sx={{mt:3}}
            style={{width:"55vw"}}
            size='small'
            id="course_name"
            name='course_name'
            options={courses.map((option) => option.name)}
            onChange={(event, newValue) => setFormData((prevState) => ({
              ...prevState,
              course_name: newValue,
            }))}
            value={formData.course_name}
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#98DED9", fontSize: "19px"} , mb:3, backgroundColor: '#193249' , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9'} ,'&:hover': {backgroundColor: '#131d2b' , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '0px 0px 2px 1px rgba(168, 252, 254,0.7)'}} variant="outlined" />}
            paperprops={{
              style: {
                backgroundColor: "#FFF",
              },
            }}
            ListboxProps={{
              style: {
                backgroundColor: "#263752",
                color:"#98DED9"
              },
            }}
          />
        </Box>


        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#98DED9" , fontFamily: montserrat.style , fontSize:"36px"}} level="body1">DRIVE LINK</Typography>
          <TextField size='small' sx={{input: { textAlign: 'center'  , color: "#98DED9", fontSize: "19px"}  , mt:3 , mb:3, backgroundColor: '#193249' , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9'} ,'&:hover': {backgroundColor: '#131d2b' , transition: 'background-color 0.15s ease-in-out'}}  , boxShadow: '0px 0px 2px 1px rgba(168, 252, 254,0.7)'}} style={{width:"55vw"}} id="link" name="link" variant="outlined" onChange={handleChange} value={formData.link}/>
        </Box>

        <Button type='submit' sx={{width:"35vw", height:"60px" , fontSize:"32px"  , fontWeight:"bold", letterSpacing:"0" ,  backgroundColor:"#ADD8E6" , color:"#193249" , mt:6 , '&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.15s ease-in-out'} , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}}>Submit</Button>
        </Box>
      </Box>
    </form>
  );
}

