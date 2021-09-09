import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles({
  cartDrawerDiv: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  icon: {
    fontSize: "30px",
    margin: "15px 0 15px 15px",
  },
  cartTitle: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "25px",
  },
  cartProduct: {
    // display: "flex",
  },
  addRemoveIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

interface Props {
  cartOpen: boolean;
  cartClose: () => void;
  quantityProducts: number;
}
const CartDrawer: React.FunctionComponent<Props> = ({
  cartOpen,
  cartClose,
  quantityProducts,
}) => {
  const classes = useStyles();
  return (
    <Drawer anchor="right" open={cartOpen} onClose={cartClose}>
      <div className={classes.cartDrawerDiv}>
        <div className={classes.cartTitle}>
          <List style={{ width: "100%" }}>
            <ListItem>
              <ShoppingCartIcon className={classes.icon} />
              <Typography
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "15px",
                  fontWeight: 800,
                  marginLeft: "8px",
                }}
              >
                1 Item
              </Typography>
            </ListItem>
            <Divider />
            <ListItem className={classes.cartProduct}>
              <div className={classes.addRemoveIcons}>
                <IconButton color="secondary">
                  <AddIcon color="secondary" />
                </IconButton>
                <Typography>{quantityProducts}</Typography>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
              </div>
            </ListItem>
            <Divider />
          </List>
        </div>
      </div>
    </Drawer>
  );
};
export default CartDrawer;
