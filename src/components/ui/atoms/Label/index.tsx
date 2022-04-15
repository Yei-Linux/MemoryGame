import classNames from "classnames";
import React from "react";
import { TStyles } from "../../../../types/interfaces";
import styles from "./style.css";

export interface ILabel {
  text: string;
}

export type TLabel = ILabel & TStyles;

const cx = classNames.bind(styles);

const Label = ({ text, className, css }: TLabel) => {
  return (
    <label style={css} className={classNames(cx("label"), className)}>
      {text}
    </label>
  );
};

export default Label;
