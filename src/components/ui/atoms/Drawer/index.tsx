import classNames from "classnames";
import React from "react";
import Container from "../../layouts/Container";
import styles from "./style.css";

export interface IDrawerElement {
  children: React.ReactNode;
}

export interface IDrawer {
  children: React.ReactNode;
  isOpen?: boolean;
}

const cx = classNames.bind(styles);

const DrawerHeader = ({ children }: IDrawerElement) => {
  return <Container>{children}</Container>;
};

const DrawerFooter = ({ children }: IDrawerElement) => {
  return <Container>{children}</Container>;
};

const DrawerBody = ({ children }: IDrawerElement) => {
  return <Container>{children}</Container>;
};

const Drawer = ({ children, isOpen }: IDrawer) => {
  return (
    <Container
      className={classNames(
        cx("drawer", `drawer--left`, {
          "drawer--left--open": isOpen,
        })
      )}
    >
      {children}
    </Container>
  );
};

Drawer.Body = DrawerBody;
Drawer.Header = DrawerHeader;
Drawer.Footer = DrawerFooter;

export default Drawer;
