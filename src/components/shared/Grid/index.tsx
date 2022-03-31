import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../types/interfaces";
import styles from "./style.css";

export interface IGrid {
  children: React.ReactNode;
}

type TGrid = IGrid & TStyles;

const Grid = ({ children, css, className }: TGrid) => {
  const cx = classNames.bind(styles);
  return (
    <div style={css} className={classNames(className, cx("grid"))}>
      {children}
    </div>
  );
};

export default Grid;
