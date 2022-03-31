import classNames from "classnames";
import React from "react";
import styles from "./style.css";
import { TStyles } from "../../../types/interfaces";

type TOnClick = () => void;

export interface IButton {
  onClick?: TOnClick;
  children: React.ReactNode;
}

type TButton = IButton & TStyles;

const Button = ({ children, onClick, css, className }: TButton) => {
  const cx = classNames.bind(styles);

  return (
    <button
      style={css}
      className={classNames(
        className,
        cx("button", "button--primary", "button--pdsmall")
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
