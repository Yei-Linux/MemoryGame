import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../types/interfaces";
import styles from "./style.css";

interface IBox {
  onClick?: () => void;
  background?: string;
  minWidth?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

type TBox = IBox & TStyles;

const Box = ({
  onClick,
  background,
  minWidth,
  minHeight,
  children,
  css,
  className,
}: TBox) => {
  const customCss: React.CSSProperties = {
    background,
    minWidth,
    minHeight,
    ...css,
  };

  const cx = classNames.bind(styles);

  return (
    <div
      onClick={onClick}
      style={customCss}
      className={classNames(className, cx("box"))}
    >
      {children}
    </div>
  );
};

export default Box;
