import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import { IFormItem } from "../../molecules/Form/Form";
import styles from "./style.css";

export interface IInput {
  variation: "primary" | "secondary" | "error" | "success";
}

export type TInput = IInput & IFormItem & TStyles;

const Input = ({
  variation = "primary",
  name,
  defaultValue,
  onChange,
  placeholder,
  css,
  className,
  border = 1,
  padding = 1,
}: TInput) => {
  const cx = classNames.bind(styles);

  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      style={css}
      className={classNames(
        className,
        cx(
          "input",
          `input--${variation}`,
          `input--border${border}`,
          `input--pd${padding}`
        )
      )}
      name={name}
      value={defaultValue}
    />
  );
};

export default Input;
