import { useState } from 'react';
import {Container, Box, TextField, Button, Typography} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// assets
import UserImage from '../assets/user.png'


function Register() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se sube la info del usuario al server");
    console.log(user);
    axios.post("http://localhost:3005/api/v1/register", {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    })
    .then((res) => {
      console.log(res);
      navigate("/users");

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
        className="mt-5"
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
            label="Nombre"
            onChange={(e) => setUser({...user, name: e.target.value})}
            type="text"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Correo electrónico"
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
            Registrar usuario
          </Button>
        </Box>
			</Container>
    </>
  )
}

export default Register