import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import styles from "./style.css";

export interface IText {
  children: React.ReactNode;
}

type TTextTag =
  | "strong"
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TText = IText & TStyles<TTextTag>;

const Text = ({ children, as = "p", weight = 3, padding = 0, css, className }: TText) => {
  const cx = classNames.bind(styles);
  const Component = as;

  return (
    <Component
      className={classNames(
        className,
        cx(`text--weight${weight}`, `text--pd${padding}`)
      )}
      style={css}
    >
      {children}
    </Component>
  );
};

export default Text;
