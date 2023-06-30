import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";


function navbar() {
    return (

        <>
        <AppBar  className="nav" position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <img className='logo' src="src/assets/images/logo.png"/>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none"> 
            <Box mx={1} className="cursor">
              <Typography className='nav-links' variant="h4" color="inherit">
                home
              </Typography>
            </Box>
            </Link>
            <Link to="/posts" className="text-decorator-none"> 
            <Box mx={1} className="cursor">
              <Typography className='nav-links' variant="h4" color="inherit">
                postagens
              </Typography>
            </Box>
            </Link>

            <Link to="/temas" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography className='nav-links' variant="h4" color="inherit">
                temas
              </Typography>
            </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none"> 
            <Box mx={1} className="cursor">
              <Typography className='nav-links' variant="h4" color="inherit">
                cadastro tema
              </Typography>
            </Box>
            </Link>
            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography className='nav-links' variant="h4" color="inherit">
                  Sair
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default navbar;