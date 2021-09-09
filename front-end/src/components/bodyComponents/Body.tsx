import React from "react";
import { makeStyles } from "@material-ui/core";
import Home from "./homeComponents/Home";
import { Route, Switch } from "react-router-dom";
import Product from "./productComponents/Product";
import TortaChocolate from "../../assets/imgs/torta-chocolate.jpg";
import Header from "../headerComponents/Header";
import Footer from "../Footer";
import Register from "../userComponents/Register";
// import CarrouselComponent from "./bodyComponents/carrouselComponent";
const useStyles = makeStyles({
  bodyMain: {
    paddingTop: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    maxWidth: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Body: React.FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <Switch>
      <React.Fragment>
        <div className={classes.bodyMain}>
          {/* <CarrouselComponent /> */}
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <Product
              srcImg={TortaChocolate}
              altImg="Nada"
              productTitle="Torta de Chocolate"
              productDescription="Massa de baunilha, recheio de creme 4 leites.
              Cobertura de chantininho e raspas de chocolate
              branco"
              preco={4890}
            />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </div>
      </React.Fragment>
    </Switch>
  );
};

export default Body;
