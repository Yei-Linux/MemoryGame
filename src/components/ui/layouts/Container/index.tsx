import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import styles from "./style.css";

export interface IContainer {
  children: React.ReactNode;
}

type TContainer = IContainer & TStyles;

const Container = ({ as = "div", children, css, className }: TContainer) => {
  const cx = classNames.bind(styles);

  const Component = as;

  return (
    <Component
      style={css}
      className={classNames(className, cx("container--pd1"))}
    >
      {children}
    </Component>
  );
};

export default Container;
