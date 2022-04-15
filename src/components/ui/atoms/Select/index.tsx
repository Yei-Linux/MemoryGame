import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import { IFormItem } from "../../molecules/Form/Form";
import styles from "./style.css";

interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  variation?: "primary";
  options?: IOption[];
}

export type TSelect = ISelect & IFormItem & TStyles;

const Select = ({
  variation = "primary",
  options,
  name,
  defaultValue,
  onChange,
  padding = 1,
  placeholder,
  css,
  className,
}: TSelect) => {
  const cx = classNames.bind(styles);

  return (
    <select
      onChange={onChange}
      placeholder={placeholder}
      style={css}
      className={classNames(
        className,
        cx("select", `select--pd${padding}`, `select--${variation}`)
      )}
      name={name}
      value={defaultValue}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
