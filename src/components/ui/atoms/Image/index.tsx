import React from "react";
import styles from "./style.css";

export interface IImage {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image = ({ src, alt, width = "100%", height = "100%" }: IImage) => {
  return (
    <img
      className={styles.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
