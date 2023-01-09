import {useState} from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Login4 = (props) => {
  const [uname, setUname] = useState();
  const [pass, setPass] = useState();

  const navigate = useNavigate();

  const unameChangeHandler = (event)=>{
    setUname(event.target.value)
  }
  const passChangeHandler = (event)=>{
    setPass(event.target.value)
  }

  const submitHandler = ()=>{
    props.makeSession(uname, pass);
    console.log(uname, pass);
    if(props.isAuthenticated){
      navigate('/Dashboard',)
    }
    
  }
  return (
    <>
      <Box
        sx={{
          background: "#F6F6F6",
        }}
      >
        <Paper
          elevation={3}
          sx={{position: 'absolute',ml:"30px", mt:"30px",  width: "fit-content",  padding: '4px 20px', borderRadius: "60px", display: 'flex', justifyContent: "center", alignItems:"center" }}
        >
        <ArrowBackIcon sx={{ transform: "scaleX(-1)", color: "#864879"}} />
          <Typography variant="p" sx={{color: "#864879", }} >
            بازگشت به صفحه اصلی
          </Typography>
        </Paper>
        <Box sx={{ display: "flex", height: "100vh" }}>
          <Paper
            elevation={3}
            sx={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              padding: "50px 50px",
              justifyContent: "center",
              margin: "auto",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ mb: "40px", fontFamily: "Billabong", fontSize: "3rem" }}
            >
              Fate
            </Typography>
            <Button
            
              variant="outlined"
              startIcon={<GoogleIcon />}
              // size="medium"
              sx={{
                border: "none",
                color: "#102031",
                "&:hover": "#fff",
                boxShadow: "0 0 5px rgb(128 49 110 / 20%)",
                width: "100%",
                mb: "15px",
                py: "13px",
                "&:hover": {
                  border: "none",
                },
              }}
              
            >
              ورود با حساب گوگل
            </Button>
            <Button
              
              variant="outlined"
              // size="medium"
              sx={{
                border: "none",
                color: "#102031",
                "&:hover": "#fff",
                boxShadow: "0 0 5px rgb(128 49 110 / 20%)",
                width: "100%",
                // mb: "10px",
                py: "13px",
                "&:hover": {
                  border: "none",
                },
              }}
            >
              ساختن حساب کاربری
            </Button>
            <Divider variant="middle" sx={{ my: "20px", width: "100%" }} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignContent: "flex-start",
              }}
            >
              <FormControl
                sx={{ mb: "15px", background: "rgba(249 249 249 / 1)" }}
              >
                <InputLabel htmlFor="uname">نام کاربری</InputLabel>
                <OutlinedInput onChange={unameChangeHandler} id="uname" type="text" />
              </FormControl>

              <FormControl
                sx={{ mb: "15px", background: "rgba(249 249 249 / 1)" }}
              >
                <InputLabel htmlFor="pass">رمز عبور</InputLabel>
                <OutlinedInput onChange={passChangeHandler} id="pass" type="password" />
              </FormControl>

              <FormControlLabel control={<Checkbox />} label="ذخیره اطلاعات" />
              <Button
                // component={Link}
                // to="/Dashboard"
                onClick={submitHandler}
                
                size="medium"
                variant="contained"
                sx={{
                  width: "100%",
                  py: "13px",
                  mt: "30px",
                  mb: "8px",
                  background: "#864879",
                  "&:hover": {
                    backgroundColor: "#864879",
                  },
                }}
              >
                ساختن حساب کاربری
              </Button>
            </Box>
            <Link to="#" underline="hover" sx={{ color: "#6859A6" }}>
              {"فراموشی رمز عبور"}
            </Link>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Login4;
