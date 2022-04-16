import classNames from "classnames";
import React from "react";
import Container from "../../components/ui/layouts/Container";
import styles from './style.css'

export interface ILayoutElement {
  children: React.ReactNode;
}

export interface ILayout {
  children: React.ReactNode;
}

const cx = classNames.bind(styles)

const Header = ({ children }: ILayoutElement) => {
  return <Container padding={0} className={cx("header")}>{children}</Container>;
};

const Content = ({ children }: ILayoutElement) => {
  return <Container className={cx("content")}>{children}</Container>;
};

const Layout = ({ children }: ILayout) => {
  return <Container padding={0} className={cx("layout")}>{children}</Container>;
};

Layout.Header = Header;
Layout.Content = Content;

export default Layout;
