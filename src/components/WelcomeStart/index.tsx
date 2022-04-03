import React from "react";
import { formWelcomeElements } from "../../constants/welcomestart";
import Form from "../ui/molecules/Form";

export interface IWelcomeStart {}

const WelcomeStart = () => {
  return (
    <div>
      <Form elements={formWelcomeElements} buttonText="Start" />
    </div>
  );
};

export default WelcomeStart;
