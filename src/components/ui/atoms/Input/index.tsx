import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import { IFormItem } from "../../molecules/Form";
import styles from "./style.css";

export interface IInput {}

export type TInput = IInput & IFormItem & TStyles;

const Input = ({ name, defaultValue, placeholder, css, className }: TInput) => {
  const cx = classNames.bind(styles);

  return (
    <input
      placeholder={placeholder}
      style={css}
      className={classNames(className, cx("input"))}
      name={name}
      value={defaultValue}
    />
  );
};

export default Input;
