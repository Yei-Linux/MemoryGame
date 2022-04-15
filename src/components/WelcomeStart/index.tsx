import React, { useState } from "react";
import { formWelcomeElements } from "../../constants/welcomestart";
import Container from "../ui/layouts/Container";
import Form from "../ui/molecules/Form/Form";
import Text from "../ui/atoms/Text";
import Modal from "../ui/molecules/Modal";

export interface IWelcomeStart {}

const WelcomeStart = () => {
  const [visibleWelcomeForm, setVisibleWelcomeForm] = useState(true);

  const handleSubmit = (values) => {
    setVisibleWelcomeForm(false);
  };

  return (
    <div>
      <Modal isVisible={visibleWelcomeForm}>
        <Modal.Header>
          <Container>
            <Text as="h3" weight={7}>Complete the information</Text>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            elements={formWelcomeElements}
            buttonText="Start"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WelcomeStart;
