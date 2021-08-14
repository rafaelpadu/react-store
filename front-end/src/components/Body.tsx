import { Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  firstSection: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
  },
});

const Body: React.FunctionComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.firstSection}>
      <div>
        <Typography align="center" variant="h4">
          Produtos em Destaque
        </Typography>
        <Divider variant="middle" />
      </div>
    </div>
  );
};

export default Body;
