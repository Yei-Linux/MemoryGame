import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import styles from "./style.css";

export interface IGrid {
  children: React.ReactNode;
  cols: number;
  rows: number;
}

type TGrid = IGrid & TStyles;

const Grid = ({ children, css, className, cols, rows }: TGrid) => {
  const cx = classNames.bind(styles);
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${cols},1fr)`,
    gridTemplateRows: `repeat(${rows},1fr)`,
    ...css,
  };

  return (
    <div style={gridStyle} className={classNames(className, cx("grid"))}>
      {children}
    </div>
  );
};

export default Grid;
