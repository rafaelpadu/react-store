import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  cpf: string;
  celular: string;
}
const UserSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    celular: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

export const User: mongoose.Model<IUser> = mongoose.model("user", UserSchema);
