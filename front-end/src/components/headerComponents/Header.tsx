import React, { useState } from "react";
import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createStyles,
  Theme,
  makeStyles,
  alpha,
} from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuInferior from "./MenuInferior";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      height: "170px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    toolBar: {},
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      position: "relative",
      right: "14rem",
    },
    search: {
      position: "relative",
      right: "5rem",
      borderRadius: theme.shape.borderRadius,
      background: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      height: "50px",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
      width: "500px",
    },
    inputInput: {
      padding: theme.spacing(2.1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),

      width: "100%",
      [theme.breakpoints.down("md")]: {
        width: "30ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
      position: "relative",
      left: "10rem",
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    initialBar: {
      width: "100%",
      height: "1.6rem",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
    },
    initialBarTexts: {
      display: "flex",
      color: "rgba(255, 255, 255, 0.9)",
      fontSize: "15px",
      marginTop: "3px",
    },
    initialBarSingleIcon: {
      marginRight: "0.2rem",
      fontSize: "19px",
      marginTop: "0.05rem",
    },
    initialBarSingleText: {
      marginRight: "0.5rem",
    },
    initialBarTextsSup: {
      position: "absolute",
      left: "25%",
    },
    initialBarIcons: {
      position: "absolute",
      top: "0",
      right: "20%",
      color: "rgba(255, 255, 255, 0.9)",
    },
    icon: {
      fontSize: "32pt",
    },
  })
);

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <div className={classes.initialBar}>
        <div className={classes.initialBarTextsSup}>
          <div className={classes.initialBarTexts}>
            <ChatBubbleIcon className={classes.initialBarSingleIcon} />
            <Typography className={classes.initialBarSingleText}>
              Fale Conosco
            </Typography>
            <PhoneIcon className={classes.initialBarSingleIcon} />
            <Typography className={classes.initialBarSingleText}>
              Telefone: (XX)XXXXX-XXXX
            </Typography>
            <WhatsAppIcon className={classes.initialBarSingleIcon} />
            <Typography className={classes.initialBarSingleText}>
              WhatsApp: (XX)XXXXX-XXXX
            </Typography>
          </div>
        </div>
        <div className={classes.initialBarIcons}>
          <InstagramIcon />
          <FacebookIcon />
        </div>
      </div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Confeitaria Doces e Travessuras
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar Produto..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label=" sh ow 4 new mails" color="inherit">
              <Badge color="secondary">
                <ShoppingCartIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon className={classes.icon} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <MenuInferior />
    </div>
  );
};

export default Header;
