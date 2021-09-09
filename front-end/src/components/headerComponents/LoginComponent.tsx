import {
  Button,
  Dialog,
  DialogTitle,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import {
  userSchemaLogin as userSchema,
  getValidationErrors,
  Errors,
  Login as LoginProps,
} from "../../validations/userValidation";
import SnackBarComp, {
  ColorSnackBar,
  MessagesSnackBar,
} from "../../validations/SnackBarComponent";
import { Link } from "react-router-dom";
import { HTTP, Endpoints } from "../../utils/Links";

const useStyles = makeStyles({
  dialogForm: {
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dialogTitle: {
    fontSize: "20px",
    fontWeight: 800,
    fontFamily: "Montserrat, sans-serif",
    position: "relative",
    bottom: "1.8rem",
  },
  emailField: {
    paddingBottom: "1.8rem",
    width: 290,
  },
  passwordField: {
    paddingBottom: "1.8rem",
    width: 290,
  },
  registerText: {
    alignSelf: "center",
    position: "relative",
    bottom: "32px",
    color: "#2B3445",
  },
  registerLink: {
    color: "#2b3445b2",
    "&:hover": { color: "#2b3445" },
  },
});

interface Props {
  openLogin: boolean;
  handleClose: () => void;
}
const initialValues: LoginProps = {
  email: "",
  password: "",
};

const LoginComponent: React.FunctionComponent<Props> = ({
  openLogin,
  handleClose,
}) => {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<Errors>({});
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState<MessagesSnackBar>(
    "Login Efetuado com Sucesso!"
  );
  const [alertSeverity, setAlertSeverity] = useState<ColorSnackBar>("success");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleOpenSnackBar = () => openAlert;
  async function validateSubmit(e: any): Promise<void> {
    e.preventDefault();
    try {
      await userSchema.validate(values, { abortEarly: false });
      setIsError(false);
      submitFormLogin();
    } catch (err: any) {
      const error = getValidationErrors(err);
      setErrorMsg(error);
      setIsError(true);
    }
  }
  async function submitFormLogin(): Promise<void> {
    const response = await fetch(`${HTTP}${Endpoints.Login}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      localStorage.setItem("token", data);
      setAlertMsg("Login Efetuado com Sucesso!");
      setAlertSeverity("success");
      setTimeout(() => handleClose(), 1000);
    } else {
      setAlertMsg("Usuário não encontrado!");
      setAlertSeverity("error");
    }
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 2000);
  }
  return (
    <form>
      <Dialog open={openLogin} onClose={handleClose}>
        <div className={classes.dialogForm}>
          <DialogTitle>
            <Typography className={classes.dialogTitle}>
              Bem-Vindo a Loja de Doces!
            </Typography>
          </DialogTitle>
          <TextField
            label="E-Mail"
            id="email"
            variant="outlined"
            value={values.email}
            name="email"
            type="email"
            placeholder="exemplo@exemplo.com"
            onChange={handleChange}
            error={isError && Boolean(errorMsg.email)}
            helperText={isError && errorMsg.email}
            className={classes.emailField}
          />
          <TextField
            label="Senha"
            variant="outlined"
            value={values.password}
            name="password"
            type="password"
            placeholder="xxxxxxx"
            onChange={handleChange}
            error={isError && Boolean(errorMsg.password)}
            helperText={isError && errorMsg.password}
            className={classes.passwordField}
          />
          <Button
            onClick={validateSubmit}
            fullWidth
            color="secondary"
            variant="contained"
          >
            Login
          </Button>
        </div>
        <Typography className={classes.registerText}>
          Não possue conta?
          <Link
            className={classes.registerLink}
            to="/register"
            onClick={handleClose}
          >
            {` Registre-se!`}
          </Link>
        </Typography>
      </Dialog>
      {openAlert && (
        <SnackBarComp
          message={alertMsg}
          severity={alertSeverity}
          open={handleOpenSnackBar}
          duration={2000}
        />
      )}
    </form>
  );
};
export default LoginComponent;
