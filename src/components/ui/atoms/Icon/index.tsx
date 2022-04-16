import classNames from "classnames";
import React from "react";
import { gallery } from "./gallery";
import styles from "./style.css";

export interface IIcon {
  id: string;
  width?: string;
  height?: string;
}

const cx = classNames.bind(styles);

const Icon = ({ id, width = "18px", height = "18px" }: IIcon) => {
  const icons = gallery("#76b0f4");
  const iconSelected = icons[id];

  if (!iconSelected) return;

  const { svg, ...props } = iconSelected;

  return (
    <svg className={cx("icon")} {...props} width={width} height={height}>
      {svg}
    </svg>
  );
};

export default Icon;
