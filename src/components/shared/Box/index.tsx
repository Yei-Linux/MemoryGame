import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../types/interfaces";
import styles from "./style.css";

interface IBox {
  background?: string;
  minWidth?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

type TBox = IBox & TStyles;

const Box = ({
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
    <div style={customCss} className={classNames(className, cx("box"))}>
      {children}
    </div>
  );
};

export default Box;
