import classNames from "classnames";
import React from "react";
import Container from "../../layouts/Container";
import styles from "./style.css";

export interface IModal {
  isVisible?: boolean;
  children: React.ReactNode;
}

interface IModalBody {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

const ModalBody = ({ children }: IModalBody) => {
  return (
    <Container className={classNames(cx("modal__body", "modal__body--pd0"))}>
      {children}
    </Container>
  );
};

const Modal = ({ children, isVisible }: IModal) => {
  return (
    <Container
      className={classNames(
        cx(
          "modal__mask",
          "modal__mask--primary",
          `modal__mask--${isVisible ? "visible" : "hidden"}`
        )
      )}
    >
      <Container
        className={classNames(
          cx(
            "modal",
            "modal--pd1",
            "modal--light",
            `modal--${isVisible ? "visible" : "hidden"}`
          )
        )}
      >
        {children}
      </Container>
    </Container>
  );
};

Modal.Body = ModalBody;

export default Modal;
