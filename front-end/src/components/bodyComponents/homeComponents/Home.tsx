import React from "react";
import { makeStyles } from "@material-ui/core";

import CardComponent from "./CardComponent";
import SectionHeader from "./SectionHeaderComponent";
import BoloBranco from "../../../assets/imgs/bolo-branco.jpg";
import BoloPreto from "../../../assets/imgs/bolo-chocolate.jpg";
import DocesChocolate from "../../../assets/imgs/doces-chocolate-escuro.jpg";
import TortaCafe from "../../../assets/imgs/torta-cafe.jpg";
import { Whatshot, Star } from "@material-ui/icons";

const useStyles = makeStyles({
  cardComponents: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  secondSection: {
    paddingTop: "45px",
  },
});

const Home: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <SectionHeader title="Produtos em Destaque" Icon={Whatshot} />
        <div className={classes.cardComponents}>
          <CardComponent
            itemName="Bolo de Chocolate Branco"
            alt="Bolo de Chocolate Branco"
            srcImg={BoloBranco}
            price="R$59,90 / kg"
          />
          <CardComponent
            alt="Bolo de Chocolate"
            srcImg={BoloPreto}
            price="R$49,90 / kg"
            itemName={"Bolo de Chocolate"}
          />
          <CardComponent
            alt="Doces de Chocolate"
            srcImg={DocesChocolate}
            price="12,90 / unidade"
            itemName={"Doces de Chocolate"}
          />
          <CardComponent
            alt="Torta de Cafe"
            srcImg={TortaCafe}
            price="45,90 / kg"
            itemName={"Torta de Cafe"}
          />
        </div>
      </div>
      <div className={classes.secondSection}>
        <SectionHeader title="Tortas" Icon={Star} />
        <div className={classes.cardComponents}>
          <CardComponent
            itemName="Torta 4 Leites"
            alt="Torta 4 Leites"
            srcImg={BoloBranco}
            price="R$48,00 / kg"
          />
          <CardComponent
            itemName="Ninho"
            alt="Ninho"
            srcImg={DocesChocolate}
            price="R$48,00 / kg"
          />
          <CardComponent
            itemName="Ninho com Morango"
            alt="Ninho com Morango"
            srcImg={TortaCafe}
            price="R$58,00 / kg"
          />
          <CardComponent
            itemName="Floresta Negra"
            alt="Floresta Negra"
            srcImg={BoloPreto}
            price="R$55,00 / kg"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
