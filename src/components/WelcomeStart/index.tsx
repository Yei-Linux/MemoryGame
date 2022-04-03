import React, { useState } from "react";
import { formWelcomeElements } from "../../constants/welcomestart";
import Form from "../ui/molecules/Form/Form";
import Modal from "../ui/molecules/Modal";

export interface IWelcomeStart {}

const WelcomeStart = () => {
  const [visibleWelcomeForm] = useState(true);
  return (
    <div>
      <Modal isVisible={visibleWelcomeForm}>
        <Modal.Body>
          <Form elements={formWelcomeElements} buttonText="Start" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WelcomeStart;
