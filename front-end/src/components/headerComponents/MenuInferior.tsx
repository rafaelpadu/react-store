import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import MenuComponent from "./MenuComponent";
import chocolateBar from "../../assets/imgs/chocolate-bar-svgrepo-com.svg";
import { Cake } from "@material-ui/icons";
import { AiTwotonePieChart } from "react-icons/ai";
const useStyles = makeStyles({
  appBar: {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#FFF",
    boxShadow: "0px 10px 16px rgb(43 52 69 / 10%)",
    zIndex: 1,
  },
  appBarIconS: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
const MenuInferior: React.FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <div className={classes.appBarIconS}>
        <MenuComponent
          itens={["Bolos de Chocolate", "Bolos de Morango", "Bolos para Festa"]}
          IconType={Cake}
        />
        <MenuComponent
          itens={["Chocolate em Barra", "Chocolate Branco", "Chocolate Misto"]}
          srcImg={chocolateBar}
        />
        <MenuComponent
          itens={[
            "Torta de Chocolate",
            "Torta de Morango",
            "Torta de Floresta Negra",
          ]}
          IconType={AiTwotonePieChart}
        />
      </div>
    </AppBar>
  );
};
export default MenuInferior;
