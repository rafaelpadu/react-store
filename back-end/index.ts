import express from "express";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import { IUser, User } from "./models/user.model";

const app = express();
const cors = require("cors");
const jwp = jsonwebtoken;
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

const port = 8000;

app.post("/api/register", async (req, res): Promise<void> => {
  const exists = await findUserByEmail(req.body.email);
  if (exists) {
    res.status(200).json("Email já cadastrado");
  } else {
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: newPassword,
        cpf: req.body.cpf,
        celular: req.body.celular,
      });
      console.log(user);
      res.status(201).json("Cadastro efetuado com sucesso!");
      console.log(res);
    } catch (e) {
      res
        .status(500)
        .json(
          "Erro ao cadastrar usuario! Entrar em contato com o administrador do sistema"
        );
    }
  }
});

app.post("/api/login", async (req, res: express.Response): Promise<void> => {
  const user = await findUserByEmail(req.body.email);
  if (!user) res.status(500).json("Email não existe");
  else {
    const isPasswordValid = await validPassword(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      const token = jwp.sign(
        {
          email: req.body.email,
          name: user.name,
        },
        "secret123"
      );
      res.status(200).json(token);
    } else {
      res.status(500).json(false);
    }
  }
});

async function validPassword(
  bodyPassword: string,
  userPassword: string
): Promise<boolean> {
  try {
    const isPassWordValid = await bcrypt.compare(bodyPassword, userPassword);
    return isPassWordValid;
  } catch (e: any) {
    return e;
  }
}

async function findUserByEmail(email: string) {
  try {
    return await User.findOne({ email: email });
  } catch (e: any) {
    return false;
  }
}

app.listen(port, () =>
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
);
