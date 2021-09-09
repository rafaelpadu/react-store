import { makeStyles, Paper, Typography, Button } from "@material-ui/core";
import React from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    width: "304px",
    height: "365px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "15px 15px 15px",
  },
  img: {
    maxWidth: "274px",
    maxHeight: "300px",
    marginBottom: "12px",
  },
  fontStyle: {
    marginTop: "12px",
    fontSize: "16px",
    fontFamily: "Josefin Slab, serif",
  },
});
interface Props {
  srcImg: string;
  alt: string;
  price: string;
  itemName: string;
}
const CardComponent: React.FunctionComponent<Props> = ({
  srcImg,
  alt,
  price,
  itemName,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.card}>
      <Link to="/product" style={{ textDecoration: "none" }}>
        <img src={srcImg} alt={alt} className={classes.img} />
      </Link>
      <Link to="/product" style={{ textDecoration: "none" }}>
        <Typography
          variant="body1"
          component="p"
          color="textSecondary"
          align="center"
          style={{ fontWeight: 600, fontFamily: "Montserrat, sans-serif" }}
        >
          {itemName}
        </Typography>
      </Link>
      <Typography
        variant="body2"
        color="textPrimary"
        align="center"
        style={{
          fontWeight: 800,
        }}
        className={classes.fontStyle}
      >
        {price}
      </Typography>
      <Button
        className={classes.fontStyle}
        variant="contained"
        color="default"
        startIcon={<ShoppingCartIcon />}
      >
        Adicionar ao Carrinho
      </Button>
    </Paper>
  );
};
export default CardComponent;
