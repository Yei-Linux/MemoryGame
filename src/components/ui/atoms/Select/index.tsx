import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import { IFormItem } from "../../molecules/Form";
import styles from "./style.css";

interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  options?: IOption[];
}

export type TSelect = ISelect & IFormItem & TStyles;

const Select = ({
  options,
  name,
  defaultValue,
  placeholder,
  css,
  className,
}: TSelect) => {
  const cx = classNames.bind(styles);

  return (
    <select
      placeholder={placeholder}
      style={css}
      className={classNames(className, cx("select"))}
      name={name}
      value={defaultValue}
    >
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
};

export default Select;
