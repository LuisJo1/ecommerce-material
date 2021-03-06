import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

function FormRow({ carrito, deleteCarrito }) {
  return (
    <>
      {carrito.map((el) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <CheckoutCard key={el.id} el={el} deleteCarrito={deleteCarrito} />
          </Grid>
        );
      })}
    </>
  );
}

export default function CheckoutPage({ carrito, deleteCarrito }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container>
          <FormRow carrito={carrito} deleteCarrito={deleteCarrito} />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total carrito={carrito} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
