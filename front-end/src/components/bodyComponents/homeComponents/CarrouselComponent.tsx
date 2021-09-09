import { makeStyles } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PropagandaBolo from "../../assets/imgs/propaganda-de-bolos-e-doces-1024x724.png";
import PropagandaBolo2 from "../../assets/imgs/unnamed.jpg";

const useStyles = makeStyles({
  img: {
    maxWidth: "274px",
    maxHeight: "500px",
  },
});
const CarrouselComponent: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Carousel>
      <div>
        <img
          src={PropagandaBolo}
          alt="Propaganda Bolo de Chocolate"
          className={classes.img}
        />
        <p>Legenda 1</p>
      </div>
      <div>
        <img src={PropagandaBolo2} alt="Propaganda" className={classes.img} />
        <p>Legenda 2</p>
      </div>
    </Carousel>
  );
};
export default CarrouselComponent;
