import { Box, TextField } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import departments from './departments';
import Autocomplete from '@mui/material/Autocomplete';
import courses from './courses';

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
        const response = await axios.post('http://localhost:3000/api/send_data',submissionData);
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
      <Box sx={{ backgroundColor: "#CEDF9F", width: "70vw", height: "500vh" }} display="flex" flexDirection="column" alignItems="center" justifyContent="top" marginTop={5}>
        <Image style={{ marginTop: "110px" , width:"100%"  , height:"250px"}} src="/safed.jpeg" width={100} height={100} alt='image' />
        <Box sx={{width : "100%" , mt : "10px"}} display="flex" flexDirection="column" alignItems="center">
          <Typography sx={{mt:5 }} level="title-lg">NAME</Typography>

          <TextField size='small' sx={{input: { textAlign: 'center' } , mt:1}} style={{width:"40vw"}} id="name" name="name" variant="outlined" onChange={handleChange} value={formData.name} helperText="whas ur name bitch?"/>

          <Typography sx={{mt:5}} level="title-lg">EMAIL</Typography>

          <TextField size='small' sx={{input: { textAlign: 'center' } , mt:1}} style={{width:"40vw"}} id="email" name="email" variant="outlined" onChange={handleChange} value={formData.email} helperText="ever heard of emails?"/>

          <Typography sx={{mt:5}} level="title-lg">DEPARTMENT</Typography>

          <Autocomplete
          sx={{mt:1}}
          style={{width:"40vw"}}
          size='small'
          id="department"
          name='department'
          options={departments.map((option) => option.name)}
          renderInput={(params) => 
            <TextField {...params} helperText="Which department are you rotting your life away in?" variant="outlined" />
          }
          PaperProps={{
            style: {
              backgroundColor: "#CEDF9F",
            },
          }}
          onChange={(event, newValue) => setFormData((prevState) => ({
            ...prevState,
            department: newValue,
          }))}
          value={formData.department}
        />

        <Typography sx={{mt:5}} level="title-lg">COURSE NAME</Typography>

        <Autocomplete
          sx={{ mt:1 }}
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
          renderInput={(params) => <TextField {...params} helperText="What's the course you ofc suck at teaching?" variant="outlined" />}
        />

        <Typography sx={{mt:5}} level="title-lg">LINK</Typography>

        <TextField size='small' sx={{input: { textAlign: 'center' } , mt:1}} style={{width:"40vw"}} id="link" name="link" variant="outlined" onChange={handleChange} value={formData.link} helperText="Please enter the Drive link of the master folder"/>

        <Button type='submit'>Submit</Button>
        </Box>
      </Box>
    </form>
  );
}