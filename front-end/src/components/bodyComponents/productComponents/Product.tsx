import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useMemo, useState } from "react";
import LoginComponent from "src/components/headerComponents/LoginComponent";
import SnackBarComp, {
  MessagesSnackBar,
  ColorSnackBar,
} from "src/validations/SnackBarComponent";
import CartDrawer from "../../drawerComponents/CartDrawer";

const useStyles = makeStyles({
  productSection: {
    display: "flex",
    alignItems: "flex-start",
  },
  productImgCard: {
    maxWidth: "300px",
    maxHeight: "300px",
  },
  productImg: {
    width: "100%",
    height: "100%",
    contentFit: "fit-content",
  },
  productText: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "100px",
  },
  productTitle: {
    fontSize: "30px",
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
  },
  productDescription: {
    fontSize: "15px",
    fontWeight: 600,
    marginTop: "20px",
    fontFamily: "Montserrat, sans-serif",
  },
  form: {
    width: "300px",
  },
  menuItem: {
    font: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
  },
  inputLabel: {
    letterSpacing: 0,
    paddingTop: "15px",
    font: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
  },
  inputLabel2: {
    marginTop: "-15px",
    transition: "margin-top 0.3s ease-in-out",
    font: "Montserrat, sans-serif",
    fontWeight: 600,
    fontSize: "18px",
  },
  prices: {
    display: "flex",
    alignItems: "center",
    marginTop: "26px",
  },
  pricesText: {
    paddingLeft: "30px",
    fontFamily: "Josefin Slab, serif",
  },
  buyButton: {
    marginTop: "15px",
    width: "160px",
  },
});

interface ProductProps {
  srcImg: string;
  altImg: string;
  productTitle: string;
  productDescription: string;
  preco: number;
}
enum Pesos {
  XS = 0.9,
  S = 1.5,
  M = 2.3,
  ML = 3.3,
  L = 4.3,
}
const Product: React.FunctionComponent<ProductProps> = ({
  srcImg,
  altImg,
  productTitle,
  productDescription,
  preco,
}: ProductProps) => {
  const classes = useStyles();
  const [diametro, setDiametro] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState<ColorSnackBar>("success");
  const [snackMsg, setSnackMsg] = useState<MessagesSnackBar>(
    "Você precisa estar logado!"
  );
  const handleCartDrawer = () => {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      if (diametro === 0) {
        setSeverity("warning");
        setSnackMsg("Você precisa selecionar ao menos um diametro!");
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
        }, 2000);
      } else {
        setCartOpen(true);
      }
    } else {
      setSeverity("warning");
      setSnackMsg("Você precisa estar logado!");
      setOpenAlert(true);
      setIsLogged(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 2000);
    }
  };
  const total = useMemo(
    () => ((preco / 100) * diametro).toFixed(2).replace(".", ","),
    [diametro]
  );
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDiametro(event.target.value as number);
  };
  const handleOpenSnackBar = () => openAlert;
  return (
    <div className={classes.productSection}>
      <div className={classes.productImgCard}>
        <img className={classes.productImg} alt={altImg} src={srcImg} />
      </div>
      <div className={classes.productText}>
        <Typography className={classes.productTitle} variant="h2">
          {productTitle}
        </Typography>
        <Typography className={classes.productDescription} variant="h3">
          {productDescription}
        </Typography>
        <div className={classes.prices}>
          <FormControl className={classes.form}>
            <InputLabel
              className={
                diametro === 0 ? classes.inputLabel : classes.inputLabel2
              }
            >
              Selecione a medida da torta
            </InputLabel>
            <Select
              value={diametro}
              onChange={handleChange}
              style={{ marginTop: 0 }}
            >
              <MenuItem value={Pesos.XS} className={classes.menuItem}>
                Para 6 pessoas - Diâmetro 13cm - 0,900kg
              </MenuItem>
              <MenuItem value={Pesos.S} className={classes.menuItem}>
                Para 12 pessoas - Diâmetro 18cm - 1,500kg
              </MenuItem>
              <MenuItem value={Pesos.M} className={classes.menuItem}>
                Para 20 pessoas - Diâmetro 23cm - 2,300kg
              </MenuItem>
              <MenuItem value={Pesos.ML} className={classes.menuItem}>
                Para 30 pessoas - Diâmetro 30cm - 3,300kg
              </MenuItem>
              <MenuItem value={Pesos.L} className={classes.menuItem}>
                Para 40 pessoas - Diâmetro 35cm - 4,300kg
              </MenuItem>
            </Select>
          </FormControl>
          <div className={classes.pricesText}>
            <Typography
              color="secondary"
              variant="h5"
              style={{ fontWeight: 800, fontFamily: "Montserrat, sans-serif" }}
            >
              R$ {(preco / 100).toFixed(2).replace(".", ",")}
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: 800, fontFamily: "Montserrat, sans-serif" }}
            >
              R$ {total} Total
            </Typography>
            <Button
              color="secondary"
              size="large"
              variant="contained"
              className={classes.buyButton}
              style={{ fontWeight: 600 }}
              onClick={handleCartDrawer}
            >
              COMPRAR
            </Button>
          </div>
        </div>
      </div>
      <CartDrawer
        quantityProducts={3}
        cartOpen={cartOpen}
        cartClose={() => setCartOpen(false)}
      />
      <LoginComponent
        openLogin={isLogged}
        handleClose={() => setIsLogged(false)}
      />
      {openAlert && (
        <SnackBarComp
          message={snackMsg}
          severity={severity}
          open={handleOpenSnackBar}
          duration={2500}
        />
      )}
    </div>
  );
};
export default Product;
