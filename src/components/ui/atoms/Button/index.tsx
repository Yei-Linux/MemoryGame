import classNames from "classnames";
import React from "react";
import styles from "./style.css";
import { TStyles } from "../../../../types/interfaces";

type TOnClick = () => void;

export interface IButton {
  onClick?: TOnClick;
  children: React.ReactNode;
  disable?: boolean;
}

type TButton = IButton & TStyles;

const Button = ({
  children,
  onClick,
  disable = false,
  css,
  className,
}: TButton) => {
  const cx = classNames.bind(styles);

  return (
    <button
      style={css}
      className={classNames(
        className,
        cx("button", "button--primary", "button--pd1", {
          "button--disable": disable,
        })
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
