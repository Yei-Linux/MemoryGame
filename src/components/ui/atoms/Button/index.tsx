import classNames from "classnames";
import React from "react";
import styles from "./style.css";
import { TStyles } from "../../../../types/interfaces";

type TOnClick = () => void;

export interface IButton {
  variation?: "primary" | "bdprimary";
  onClick?: TOnClick;
  children: React.ReactNode;
  disable?: boolean;
  type?: "button" | "submit";
}

type TButton = IButton & TStyles;

const Button = ({
  variation = "primary",
  children,
  onClick,
  disable = false,
  type = "button",
  css,
  className,
}: TButton) => {
  const cx = classNames.bind(styles);

  return (
    <button
      type={type}
      style={css}
      className={classNames(
        className,
        cx("button", `button--${variation}`, "button--pd1", {
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
