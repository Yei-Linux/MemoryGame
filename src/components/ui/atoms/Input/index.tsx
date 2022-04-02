import React from "react";
import { TStyles } from "../../../../types/interfaces";

export interface IInput {
  name: string;
  defaultValue?: string;
}

type TInput = IInput & TStyles;

const Input = ({ name, defaultValue }: TInput) => {
  return <input name={name} value={defaultValue} />;
};

export default Input;
