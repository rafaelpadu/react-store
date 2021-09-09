import {
  Link,
  makeStyles,
  SvgIconTypeMap,
  Typography,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import { RiArrowRightSFill } from "react-icons/ri";
const useStyles = makeStyles({
  cardTitle: {
    alignSelf: "flex-start",
    fontFamily: "Open Sans, Roboto",
    fontSize: "25px",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleLeft: {
    display: "flex",
    alignItems: "center",
  },
  titleRight: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
});

interface Props {
  title: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
const SectionHeader: React.FunctionComponent<Props> = ({ title, Icon }) => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <div className={classes.cardTitle}>
      <div className={classes.titleLeft}>
        {Icon && <Icon />}
        <Typography style={{ marginLeft: 5 }} variant="h4">
          Produtos em Destaque
        </Typography>
      </div>
      <div>
        <Typography align="right">
          <Link
            href="#"
            onClick={preventDefault}
            className={classes.titleRight}
            color="inherit"
          >
            Todos os Produtos
            <RiArrowRightSFill />
          </Link>
        </Typography>
      </div>
    </div>
  );
};
export default SectionHeader;
