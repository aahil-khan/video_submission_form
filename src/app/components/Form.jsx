import { Box, TextField } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import departments from './departments';
import Autocomplete from '@mui/material/Autocomplete';
import courses from './courses';
import { Raleway} from 'next/font/google';

const montserrat = Raleway({ subsets: ["latin"] });

export default function Form() {
  const [formData, setFormData] = React.useState({
    name: '',
    email:'',
    department: '',
    course_name: '',
    link: '',
    // Add other form fields here
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.email === ""){
      alert("Please fill email!");
    } else if(formData.name === ""){
      alert("Please fill name!");
    }else{
        const submissionData = {
            "entry.1707999584": formData.name,
            "entry.1762809343": formData.email,
            "entry.2101014162" : formData.department,
            "entry.46337159": formData.course_name,
            "entry.1732285625": formData.link,
            // Add other form fields here
        };
        const response = await axios.post('https://videosubmissionform-aahil-khans-projects.vercel.app/api/send_data',submissionData);
        console.log(response.data);
    }

    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "70vw", height: "160vh", border: "1px solid #98DED9" , p:6 , borderRadius:8}} display="flex" flexDirection="column" alignItems="center" justifyContent="top" marginTop={5}>
        <Image style={{ marginTop: "0px" , width:"100%"  , height:"270px" , borderRadius:8}} src="/video.gif" width={100} height={100} alt='image' />
        <Box sx={{width : "100%" , mt : "10px", p: 1, borderRadius: 3}} display="flex" flexDirection="column" alignItems="center">
          
          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#98DED9", fontFamily: montserrat.style , fontSize:"36px"}} level="body1">NAME</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#98DED9" } , mt:3 , mb:3 , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9', borderRadius: '10px'} ,'&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.3s ease-in-out'}} , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}} style={{width:"40vw"}} id="name" name="name" variant="outlined" onChange={handleChange} value={formData.name}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#98DED9" , fontFamily: montserrat.style , fontSize:"36px"}} level="body1">EMAIL</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#98DED9" } , mt:3 , mb:3 , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9', borderRadius: '10px'} ,'&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.3s ease-in-out'}} , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}} style={{width:"40vw"}} id="email" name="email" variant="outlined" onChange={handleChange} value={formData.email} />
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#98DED9", fontFamily: montserrat.style , fontSize:"36px"}} level="body1">DEPARTMENT</Typography>

            <Autocomplete
            sx={{mt:3}}
            style={{width:"40vw"}}
            size='small'
            id="department"
            name='department'
            options={departments.map((option) => option.name)}
            renderInput={(params) => 
              <TextField {...params} sx={{input:{color: "#98DED9"} , mb:3 , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9', borderRadius: '10px'} ,'&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.3s ease-in-out'}} , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}} variant="outlined" />
            }
            PaperProps={{
              style: {
                backgroundColor: "#FFF",
              },
            }}
            ListboxProps={{
              style: {
                backgroundColor: "#98DED9",
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
          <Typography sx={{color:"#98DED9" , fontFamily: montserrat.style , fontSize:"36px"}} level="body1">COURSE NAME</Typography>

          <Autocomplete
            sx={{mt:3}}
            style={{width:"40vw"}}
            size='small'
            id="course_name"
            name='course_name'
            options={courses.map((option) => option.name)}
            onChange={(event, newValue) => setFormData((prevState) => ({
              ...prevState,
              course_name: newValue,
            }))}
            value={formData.course_name}
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#98DED9"} , mb:3 , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9', borderRadius: '10px'} ,'&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.3s ease-in-out'}} , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}} variant="outlined" />}
            PaperProps={{
              style: {
                backgroundColor: "#FFF",
              },
            }}
            ListboxProps={{
              style: {
                backgroundColor: "#98DED9",
              },
            }}
          />
        </Box>


        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#98DED9" , fontFamily: montserrat.style , fontSize:"36px"}} level="body1">DRIVE LINK</Typography>
          <TextField size='small' sx={{input: { textAlign: 'center'  , color: "#98DED9"}  , mt:3 , mb:3 , '& .MuiOutlinedInput-root': {'& fieldset': {borderColor: '#98DED9' , borderRadius: '10px'} ,'&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.3s ease-in-out'}}  , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}} style={{width:"40vw"}} id="link" name="link" variant="outlined" onChange={handleChange} value={formData.link}/>
        </Box>

        <Button type='submit' sx={{width:"40vw", height:"60px" , fontSize:"24px" , backgroundColor:"#ADD8E6" , color:"#193249" , borderRadius:"10px" , mt:6 , '&:hover': {backgroundColor: '#ffffff' , transition: 'background-color 0.3s ease-in-out'}}}>Submit</Button>
        </Box>
      </Box>
    </form>
  );
}

