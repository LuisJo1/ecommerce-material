import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from "../assets/img/logo.png"
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem"
  },
  AppBar: {
    backgroundColor: '#3949ab',
    boxShadow: "none",
    
  },
  grow: {
    flexGrow: 1,
  },

  button: {
    marginLeft:theme.spacing(2)
  },

  image: {
    marginRight: "10px",
    height: "3rem"
  },

  text: {
    color: 'white',
    borderColor: 'white'
  }

}));

export default function Navbar({setSesionStatus, carrito}) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={logo} alt="logo" className={classes.image}/>
            </IconButton>
          </Link>
          
          <div className={classes.grow}></div>
          <Typography variant="h6" color="textPrimary" component="p">
            
          </Typography>
          <div className={classes.button}>
            <Button className={classes.text} variant="outlined" onClick={() => setSesionStatus(true)}>
              <strong>Salir</strong>
            </Button>
            <Link to="/checkout-page">
              <IconButton aria-label='show car items' color="inherit">
                <Badge badgeContent={carrito.length} color="secondary">
                  <ShoppingCart className={classes.text} fontSize='large' />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
