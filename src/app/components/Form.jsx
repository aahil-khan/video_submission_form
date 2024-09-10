'use client';
import { Box, TextField } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import departments from './departments';
import Autocomplete from '@mui/material/Autocomplete';
import biotechnology from './Departments/BIOTECHNOLOGY';
import chemical from './Departments/CHEMICAL';
import civil from './Departments/CIVIL';
import common from './Departments/COMMON';
import computer from './Departments/COMPUTER';
import ece from './Departments/ECE';
import eic from './Departments/EIC';
import other from './Departments/other';
import mechanical from './Departments/MECHANICAL';
import year from './year';
import { Lilita_One } from 'next/font/google';

const montserrat = Lilita_One({ subsets: ["latin"], weight: "400"});

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

  const [displayOther, setDisplayOther] = React.useState(false);

  const [displayCourse , setDisplayCourse] = React.useState(true);

  const [formData, setFormData] = React.useState({
    name: '',
    email:'',
    department: '',
    course_name: '',
    link: '',
    remarks:'',
    phone: '',
    year: '',
  });

  const handleSubmit = async (e) => {

    console.log(formData);

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
    }else if(formData.year===""){
      alert("Please fill year!");
    }else{
        const submissionData = {
            "entry.1337227058": formData.name,
            "entry.984075185": formData.email,
            "entry.361790054" : formData.department,
            "entry.1102107939": formData.course_name,
            "entry.1394333823": formData.link,
            "entry.503119442":formData.remarks,
            "entry.1263328218":formData.phone,
            "entry.1434756459":formData.year
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
  };

  const handleDepartment = (event, newValue) => {
    let department = newValue;

    setFormData((prevState) => ({
    ...prevState,
    course_name:"",
    department: newValue,
    }));

    if(department == "Common Subjects and Miscellaneous"){
      setDisplayOther(true);
    }else{
      setDisplayOther(false);
    }

    if(department == "Centre for Training and Development" || department == "Experiential Learning Centre" || department == "Venture Lab"){
      setDisplayCourse(false);
    }else{
      setDisplayCourse(true);
    }

    

    if(department == "Department of Biotechnology"){
      setCourse(biotechnology);
    }else if(department == "Chemical Engineering"){
      setCourse(chemical);
    }else if(department == "Civil Engineering"){
      setCourse(civil);
    }else if(department == "Common Subjects and Miscellaneous"){
      setDisplayOther(true);
      setCourse(common);
    }else if(department == "Computer Science & Engineering"){
      setCourse(computer);
    }else if(department == "Electronics & Communication Engineering"){
      setCourse(ece);
    }else if(department == "Electrical & Instrumentation Engineering"){
      setCourse(eic);
    }else if(department == "Mechanical Engineering Department"){
      setCourse(mechanical);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ width: "70vw", height: "100%", border: "2px solid #edeff3" , p: 4  ,  borderRadius:8 , boxShadow: '0px 0px 10px 10px rgba(24, 24, 24,0.7)'}} display="flex" flexDirection="column" alignItems="center" justifyContent="top" marginTop={5}>
        <img style={{ marginTop: "0px" , width:"100%"  , height:isSmallScreen ? "90px" :"270px" , borderRadius:8}} src={isSmallScreen ?"/banner-small.png" :"/banner.png"} width={100} height={100} alt='image' />
        <Box sx={{width : "100%" , mt : "10px", p: 1, borderRadius: 3}} display="flex" flexDirection="column" alignItems="center">
          
          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#ffffff", fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">NAME OF FACULTY</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" , borderRadius:"8" } , mt:3 , mb:3, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="name" name="name" variant="outlined" onChange={handleChange} value={formData.name}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#ffffff" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">EMAIL</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" , borderRadius:"8" } , mt:3 , mb:3, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="email" name="email" variant="outlined" onChange={handleChange} value={formData.email}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#ffffff" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">PHONE NUMBER</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#c66450" , fontSize: "21px", fontWeight:"700"  , borderRadius:"8" } , mt:3 , mb:3, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="phone" name="phone" variant="outlined" onChange={handleChange} value={formData.phone}/>
          </Box>

          <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#ffffff", fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">DEPARTMENT</Typography>

            <Autocomplete
            sx={{mt:3}}
            style={{width:"55vw"}}
            size='small'
            id="department"
            name='department'
            options={departments.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#c66450", fontSize: "21px", fontWeight:"700"  , textAlign:"center" , borderRadius:"8"} , mb:0, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8 }} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} variant="outlined" />}
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
          <Typography sx={{mt:1,mb:1,color:"#ffffff" ,textAlign:"center" , fontFamily: montserrat.style , fontSize:"16px" , textShadow: "2px 2px 4px #000000"}} level="body1">Please select Common Subjects and Miscellaneous if your department is not listed</Typography>
          </Box>

       {displayCourse ? <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#ffffff" ,textAlign:"center" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">COURSE NAME</Typography>

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
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#c66450", fontSize: "21px", fontWeight:"700"  , textAlign:"center" , borderRadius:"8"} , mb:0, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} variant="outlined" />}
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
          
          {displayOther ? <Typography sx={{mt:1,mb:1,color:"#ffffff" ,textAlign:"center" , fontFamily: montserrat.style , fontSize:"16px" , textShadow: "2px 2px 4px #000000"}} level="body1">Please select Other if you still dont see your course</Typography> : null}

        </Box> : 
        
        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
            <Typography sx={{color:"#ffffff" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">COURSE NAME</Typography>
            <TextField size='small' sx={{input: { textAlign: 'center' , color: "#c66450" , fontSize: "21px" , fontWeight:"700" , borderRadius:"8" } , mt:3 , mb:3, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="course_name" name="course_name" variant="outlined" onChange={handleChange} value={formData.course_name}/>
        </Box>}

        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#ffffff" ,textAlign:"center" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">YEAR</Typography>

          <Autocomplete
            sx={{mt:3}}
            style={{width:"55vw"}}
            size='small'
            id="year"
            name='year'
            options={year.map((option) => option.name)}
            onChange={(event, newValue) => setFormData((prevState) => ({
              ...prevState,
              year: newValue,
            }))}
            value={formData.year}
            renderInput={(params) => <TextField {...params} sx={{input:{color: "#c66450", fontSize: "21px", fontWeight:"700"  , textAlign:"center" , borderRadius:"8"} , mb:0, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border: 'none'} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} variant="outlined" />}
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
      
        </Box>

        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#ffffff" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1">DRIVE LINK</Typography>
          <TextField size='small' sx={{input: { textAlign: 'center' , color: "#c66450" , fontSize: "21px" , fontWeight:"700"  , borderRadius:"8" } , mt:3 , mb:3, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8, boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="link" name="link" variant="outlined" onChange={handleChange} value={formData.link}/>
          </Box>

        <Box sx={{display:"flex" , flexDirection:"column" , alignItems:"center" , mt:5}}>
          <Typography sx={{color:"#ffffff" , fontFamily: montserrat.style , fontSize:"36px" , textShadow: "2px 2px 4px #000000"}} level="body1" >REMARKS (OPTIONAL)</Typography>
          <TextField size='small' sx={{input: { textAlign: 'center' , color: "#c66450" , fontSize: "21px" , fontWeight:"700"  , borderRadius:"8" } , mt:3 , mb:3, backgroundColor: '#edeff3' , '& .MuiOutlinedInput-root': {'& fieldset': {border : "none"} ,'&:hover': {backgroundColor: 'rgba(0,0,0,0.5)',input : {color: "#EEEDEB"} , transition: 'background-color 0.15s ease-in-out' , borderRadius: 8}} , borderRadius: 8 , boxShadow: '5px 5px 8px 1px rgba(0, 0, 0, 1)'}} style={{width:"55vw"}} id="remarks" name="remarks" variant="outlined" onChange={handleChange} value={formData.remarks}/>
          <Typography sx={{mt:1,mb:1,color:"#ffffff" ,textAlign:"center" , fontFamily: montserrat.style , fontSize:"16px" , textShadow: "2px 2px 4px #000000"}} level="body1">please enter none if not required</Typography>
          </Box>

        <Button type='submit' sx={{width:"35vw", height:"60px" , fontSize:"32px"  , fontWeight:"bold", letterSpacing:"0" ,  backgroundColor:"#edeff3" , color:"#c66450" , mt:6 , borderRadius:"32px" , '&:hover': {backgroundColor: 'rgba(0,0,0,0.5)' , color:"#EEEDEB" , transition: 'background-color 0.15s ease-in-out'} , boxShadow: '5px 8px 10px rgba(0, 0, 0, 1)'}}>Submit</Button>
        </Box>
      </Box>
    </form>
  );
}

