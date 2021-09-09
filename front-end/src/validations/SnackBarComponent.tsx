import React, { SyntheticEvent, useState } from "react";
import Alert, { Color } from "@material-ui/lab/Alert";
import { Snackbar, Slide } from "@material-ui/core";

interface Props {
  message: string;
  severity: Color;
  open: () => boolean;
  duration: number;
}
export type ColorSnackBar = Color;
export type MessagesSnackBar =
  | "Login Efetuado com Sucesso!"
  | "Sistema de Banco de Dados Offline!"
  | "Usuário não encontrado!"
  | "Cadastro efetuado com sucesso!"
  | "Falha ao cadastrar usuario!"
  | "Email já cadastrado!"
  | "Você precisa estar logado!"
  | "Você precisa selecionar ao menos um diametro!";
const SnackBarComp: React.FunctionComponent<Props> = ({
  message,
  severity,
  open,
  duration,
}) => {
  const [openAlert, setOpenAlert] = useState(open);
  const handleClose = (
    event: SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={duration}
      open={openAlert}
      onClose={handleClose}
      TransitionComponent={Slide}
    >
      <Alert variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarComp;
