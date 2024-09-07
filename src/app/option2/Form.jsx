'use client';
import { Box, TextField } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import departments from '../components/departments';
import Autocomplete from '@mui/material/Autocomplete';
import biotechnology from '../components/Departments/BIOTECHNOLOGY';
import chemical from '../components/Departments/CHEMICAL';
import civil from '../components/Departments/CIVIL';
import common from '../components/Departments/COMMON';
import computer from '../components/Departments/COMPUTER';
import ece from '../components/Departments/ECE';
import eic from '../components/Departments/EIC';
import mechanical from '../components/Departments/MECHANICAL';
import { Noto_Sans } from 'next/font/google';

const montserrat = Noto_Sans({ subsets: ["latin"], weight: "400"});

export default function Form() {

  function isScreenSmall() {
    if(typeof window !== 'undefined'){
      return window.innerWidth <= 800;
    }
    return false;
  }

  const [isSmallScreen, setIsSmallScreen] = React.useState(isScreenSmall());

  React.useEffect(() => {
    const handleResize = () => setIsSmallScreen(isScreenSmall());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [course , setCourse] = React.useState([]);

  const [displayCourse , setDisplayCourse] = React.useState(true);

  const [formData, setFormData] = React.useState({
    name: '',
    email:'',
    department: '',
    course_name: '',
    link: '',
    remarks:'',
    phone: '',
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
    }else if(formData.phone===""){
      alert("Please fill phone!");
    }else if(formData.remarks===""){
      alert("Please fill remarks! (none if not required)");
    }else if(formData.phone.length<10){
      alert("Phone Number Invalid!");
    }else{
        const submissionData = {
            "entry.1914479458": formData.name,
            "entry.1140423365": formData.email,
            "entry.688139060" : formData.department,
            "entry.346488187": formData.course_name,
            "entry.1163931876": formData.link,
            "entry.887102447":formData.remarks,
            "entry.1165401347":formData.phone
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

  const handleDepartment = (event, newValue) => {
    let department = newValue;

    setFormData((prevState) => ({
    ...prevState,
    course_name:"",
    department: newValue,
    }));

    if(department == "Department of Biotechnology"){
      setCourse(biotechnology);
      setDisplayCourse(true);
    }else if(department == "Chemical Engineering"){
      setCourse(chemical);
      setDisplayCourse(true);
    }else if(department == "Civil Engineering"){
      setCourse(civil);
      setDisplayCourse(true);
    }else if(department == "Common Subjects and Miscellaneous"){
      setCourse(common);
      setDisplayCourse(true);
    }else if(department == "Computer Science & Engineering"){
      setCourse(computer);
      setDisplayCourse(true);
    }else if(department == "Electronics & Communication Engineering"){
      setCourse(ece);
      setDisplayCourse(true);
    }else if(department == "Electrical & Instrumentation Engineering"){
      setCourse(eic);
      setDisplayCourse(true);
    }else if(department == "Mechanical Engineering Department"){
      setCourse(mechanical);
      setDisplayCourse(true);
    }else{
      setDisplayCourse(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "70vw", height: "100%", p: 4}} display="flex" flexDirection="column" alignItems="center" justifyContent="top" marginTop={5}>
        <img style={{ marginTop: "0px" , width:"110%"  , height:isSmallScreen ? "90px" :"290px" , boxShadow: '0px 0px 10px 5px rgba(24, 24, 24,0.7)'}} src={isSmallScreen ?"/banner-small.png" :"/banneroption2.png"} width={100} height={100} alt='image' />
        <Box sx={{width : "100%" , mt : "10px", p: 1}} display="flex" flexDirection="column" alignItems="center">
          
          <Box sx={{display:"flex" , flexDirection:"row" , justifyContent:"space-between" ,gap:4,  alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#cad9d2", fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Name of Faculty</Typography>
            <TextField size='small' sx={{input: { textAlign: 'left' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" } , mt:3 , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="name" name="name" variant="outlined" onChange={handleChange} value={formData.name}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"row", justifyContent:"space-between" ,gap:24 , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#cad9d2" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Email</Typography>
            <TextField size='small' sx={{input: { textAlign: 'left' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" } , mt:3 , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"50vw"}} id="email" name="email" variant="outlined" onChange={handleChange} value={formData.email}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"row", justifyContent:"space-between" ,gap:6 , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#cad9d2" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Phone Number</Typography>
            <TextField size='small' sx={{input: { textAlign: 'left' , color: "#c66450" , fontSize: "21px", fontWeight:"700" } , mt:3 , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="phone" name="phone" variant="outlined" onChange={handleChange} value={formData.phone}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"row", justifyContent:"space-between" ,gap:10 , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#cad9d2", fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Department</Typography>

            <Autocomplete
            sx={{mt:3}}
            style={{width:"50vw"}}
            size='small'
            id="department"
            name='department'
            options={departments.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#c66450", fontSize: "21px", fontWeight:"700"  , textAlign:"left" } , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' }}, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} variant="outlined" />}
            paperprops={{
              style: {
                backgroundColor: "#FFF",
              },
            }}
            ListboxProps={{
              style: {
                backgroundColor: "#edeff3",
                color:"#c66450"
              },
            }}
            onChange={handleDepartment}
            value={formData.department}
          />
          </Box>

        {displayCourse ? <Box sx={{display:"flex" , flexDirection:"row", justifyContent:"space-between" ,gap:10 , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#cad9d2" ,textAlign:"left" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Course Name</Typography>

          <Autocomplete
            sx={{mt:3}}
            style={{width:"55vw"}}
            size='small'
            id="course_name"
            name='course_name'
            options={course.map((option) => option.name)}
            onChange={(event, newValue) => setFormData((prevState) => ({
              ...prevState,
              course_name: newValue,
            }))}
            value={formData.course_name}
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#c66450", fontSize: "21px", fontWeight:"700"  , textAlign:"left"} , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} variant="outlined" />}
            paperprops={{
              style: {
                backgroundColor: "#FFF",
              },
            }}
            ListboxProps={{
              style: {
                backgroundColor: "#edeff3",
                color:"#c66450"
              },
            }}
          />
        </Box> : null}


        <Box sx={{display:"flex" , flexDirection:"row", justifyContent:"space-between"  ,gap:16, alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#cad9d2" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Drive Link</Typography>
          <TextField size='small' sx={{input: { textAlign: 'left' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" } , mt:3 , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"53vw"}} id="link" name="link" variant="outlined" onChange={handleChange} value={formData.link}/>
          </Box>

        <Box sx={{display:"flex" , flexDirection:"row", justifyContent:"space-between" ,gap:17 , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#cad9d2" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">Remarks</Typography>
          <TextField size='small' sx={{input: { textAlign: 'left' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" } , mt:3 , mb:3, backgroundColor: '#cad9d2' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out'}} , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"50vw"}} id="remarks" name="remarks" variant="outlined" onChange={handleChange} value={formData.remarks}/>
          </Box>

        <Button type='submit' sx={{width:"35vw", height:"60px" , fontSize:"32px"  , fontWeight:"bold", letterSpacing:"0" ,  backgroundColor:"#cad9d2" , color:"#c66450" , mt:6 , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}}>Submit</Button>
        </Box>
      </Box>
    </form>
  );
}


