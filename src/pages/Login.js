import { useState } from 'react';
import {Container, Box, TextField, Button, Typography} from '@mui/material';
import axios from 'axios';
import { useAuth } from '../hooks/AuthProvider';

// assets
import UserImage from '../assets/user.png'


function Login() {
  const [user, setUser] = useState({});
  const {setToken} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se sube la info del usuario al server");
    console.log(user);
    axios.post("http://localhost:3005/api/v1/login", {
      email: user.email,
      password: user.password,
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
			<Container 
        maxWidth="sm"
        sx={{
          bgcolor: "#f5f5f5",
        }}
      >
				<Box 
          component="form"
          onSubmit={handleSubmit}
        >
          <Box 
            component="img"
            src={UserImage}
            sx={{
              display: "block",
              margin: "auto",
              width: "50%",
              height: "50%",
            }}
          /> 

          <TextField 
            fullWidth
            label="Usuario"
            onChange={(e) => setUser({...user, email: e.target.value})}
            type="text"
            margin="normal"
          />
          <TextField 
            fullWidth
            label="Contraseña"
            onChange={(e) => setUser({...user, password: e.target.value})}
            type="password"
            margin="normal"
          />
          <Button 
            variant="contained" 
            type="submit"
            fullWidth
            sx={{
              mt: 2,
              textTransform: "none",
              fontSize: "1.2rem", 
              backgroundColor: "#3f51b5",
              //hover
              "&:hover": {
                backgroundColor: "#3f51b5",
                opacity: 0.9,
              },
            }}
          >
            Iniciar sesión
          </Button>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              textAlign: "center",
            }}
          >
            ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>
          </Typography>
        </Box>
			</Container>
    </>
  )
}

export default Login