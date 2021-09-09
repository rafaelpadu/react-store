import {
  makeStyles,
  Paper,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import SnackBarComp, {
  ColorSnackBar,
  MessagesSnackBar,
} from "src/validations/SnackBarComponent";
import {
  Register as RegisterProps,
  userSchemaRegister,
  Errors,
  getValidationErrors,
} from "../../validations/userValidation";
import { HTTP, Endpoints } from "../../utils/Links";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6rem",
  },
  titleHeader: {
    fontWeight: 800,
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  subTitle: {
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "1rem",
  },
  textFields: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  bigFields: {
    width: "26rem",
    marginTop: "15px",
  },
  smallField: {
    width: "18rem",
    marginTop: "15px",
  },
});

const initialState: RegisterProps = {
  name: "",
  email: "",
  cpf: "",
  celular: "",
  password: "",
  passwordConf: "",
};

const Register: React.FunctionComponent = () => {
  const [state, setState] = useState(initialState);
  const [isError, setIsError] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState<Errors>({});
  const [openAlert, setOpenAlert] = useState(false);
  const history = useHistory();
  const [alertMessage, setAlertMessage] = useState<MessagesSnackBar>(
    "Login Efetuado com Sucesso!"
  );
  const [severityAlert, setAlertSeverity] = useState<ColorSnackBar>("success");
  const classes = useStyles();
  const handleOpenSnackBar = () => openAlert;
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const validateSubtmitRegister = async (e: any): Promise<void> => {
    e.preventDefault();
    try {
      await userSchemaRegister.validate(state, { abortEarly: false });
      setIsError(false);
      submitRegister();
    } catch (e: any) {
      const errors = getValidationErrors(e);
      setIsError(true);
      setErrorMsgs(errors);
    }
  };
  async function submitRegister(): Promise<void> {
    const response = await fetch(`${HTTP}${Endpoints.Register}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    const data = await response.status;
    if (data === 201) {
      setAlertMessage("Cadastro efetuado com sucesso!");
      setAlertSeverity("success");
      setTimeout(() => history.push("/home"), 2000);
      console.log("Bateu aqui 2");
      console.log(data);
    } else if (data === 200) {
      setAlertMessage("Email já cadastrado!");
      setAlertSeverity("error");
    } else {
      setAlertMessage("Sistema de Banco de Dados Offline!");
      setAlertSeverity("error");
      console.log("Bateu aqui");
      console.log(data);
    }
    setOpenAlert(false);
    setOpenAlert(true);
  }
  return (
    <form>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h1" className={classes.titleHeader}>
          Crie sua conta
        </Typography>
        <Typography variant="h2" className={classes.subTitle}>
          Por favor, preencha os campos abaixo
        </Typography>
        <div className={classes.textFields}>
          <TextField
            label="Nome Completo"
            id="name"
            variant="outlined"
            value={state.name}
            name="name"
            type="name"
            onChange={handleChange}
            error={isError && Boolean(errorMsgs.name)}
            helperText={isError && errorMsgs.name}
            className={classes.bigFields}
          />
          <TextField
            label="CPF"
            id="cpf"
            variant="outlined"
            value={state.cpf}
            name="cpf"
            type="cpf"
            placeholder="xxx.xxx.xxx-xx"
            onChange={handleChange}
            error={isError && Boolean(errorMsgs.cpf)}
            helperText={isError && errorMsgs.cpf}
            className={classes.smallField}
          />
          <TextField
            label="Celular"
            id="celular"
            variant="outlined"
            value={state.celular}
            name="celular"
            type="celular"
            placeholder="(xx) x xxxx-xxxx"
            onChange={handleChange}
            error={isError && Boolean(errorMsgs.celular)}
            helperText={isError && errorMsgs.celular}
            className={classes.smallField}
          />
          <TextField
            label="E-Mail"
            id="email"
            variant="outlined"
            value={state.email}
            name="email"
            type="email"
            placeholder="exemplo@exemplo.com"
            onChange={handleChange}
            error={isError && Boolean(errorMsgs.email)}
            helperText={isError && errorMsgs.email}
            className={classes.bigFields}
          />
          <TextField
            label="Senha"
            id="password"
            variant="outlined"
            value={state.password}
            name="password"
            type="password"
            placeholder="xxxxxx"
            onChange={handleChange}
            error={isError && Boolean(errorMsgs.password)}
            helperText={isError && errorMsgs.password}
            className={classes.smallField}
          />
          <TextField
            label="Confirme sua Senha"
            id="passwordConf"
            variant="outlined"
            value={state.passwordConf}
            name="passwordConf"
            type="password"
            placeholder="xxxxxx"
            onChange={handleChange}
            error={isError && Boolean(errorMsgs.passwordConf)}
            helperText={isError && errorMsgs.passwordConf}
            className={classes.smallField}
          />
        </div>
        <Button
          onClick={validateSubtmitRegister}
          color="secondary"
          variant="contained"
          style={{ marginTop: "15px" }}
        >
          Enviar
        </Button>
      </Paper>
      {openAlert && (
        <SnackBarComp
          message={alertMessage}
          severity={severityAlert}
          open={handleOpenSnackBar}
          duration={2000}
        />
      )}
    </form>
  );
};
export default Register;
