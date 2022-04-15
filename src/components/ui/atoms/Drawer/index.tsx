import React from "react";
import Container from "../../layouts/Container";

export interface IDrawerElement {
  children: React.ReactNode;
}

export interface IDrawer {
  children: React.ReactNode;
}

const DrawerHeader = ({ children }: IDrawerElement) => {
  return <Container>{children}</Container>;
};

const DrawerFooter = ({ children }: IDrawerElement) => {
  return <Container>{children}</Container>;
};

const DrawerBody = ({ children }: IDrawerElement) => {
  return <Container>{children}</Container>;
};

const Drawer = ({ children }: IDrawer) => {
  return <Container>{children}</Container>;
};

Drawer.Body = DrawerBody
Drawer.Header = DrawerHeader
Drawer.Footer = DrawerFooter

export default Drawer;
