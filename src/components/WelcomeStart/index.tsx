import React, { useState } from "react";
import { formWelcomeElements } from "../../constants/welcomestart";
import Form from "../ui/molecules/Form/Form";
import Modal from "../ui/molecules/Modal";

export interface IWelcomeStart {}

const WelcomeStart = () => {
  const [visibleWelcomeForm,setVisibleWelcomeForm] = useState(true);

  const handleSubmit = (values) => {
    setVisibleWelcomeForm(false)
  }

  return (
    <div>
      <Modal isVisible={visibleWelcomeForm}>
        <Modal.Body>
          <Form onSubmit={handleSubmit} elements={formWelcomeElements} buttonText="Start" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WelcomeStart;
