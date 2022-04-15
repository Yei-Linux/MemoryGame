import classNames from "classnames";
import React, { FormEvent, useContext, useEffect } from "react";
import WithContextStore from "../../../../hocs/WithContextStore";
import { formContext } from "../../../../store/context";
import FormProvider from "../../../../store/context/providers/FormProvider";
import Button from "../../atoms/Button";
import Container from "../../layouts/Container";

import styles from "./style.css";
import indexStyles from "../../../../styles/index.css";
import FormItem, { IElement } from "./FormItem";

const cx = classNames.bind(styles);
const indexCx = classNames.bind(indexStyles);

export interface IFormItem {
  onChange?: (e: unknown) => void;
  name: string;
  placeholder: string;
  defaultValue?: string;
  label: string;
}

export interface IForm {
  elements: IElement[];
  buttonText: string;
  onSubmit: (formData) => void;
}
const Form = ({ elements, buttonText, onSubmit }: IForm) => {
  const hasSubmitButton = !!elements.length;
  const { initFormElements, formData } = useContext(formContext);

  const handleSubmit = <T,>(e: FormEvent<T>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInitialForm = () => {
    const formElements = {};
    elements.forEach(
      ({ item: { name, defaultValue } }) => (formElements[name] = defaultValue)
    );
    initFormElements(formElements);
  };

  useEffect(() => {
    handleInitialForm();
  }, []);

  return (
    <form className={classNames(cx("form"))} onSubmit={handleSubmit}>
      {elements.map(({ type, item, label }) => (
        <FormItem key={item.name} type={type} item={item} label={label} />
      ))}

      {hasSubmitButton && (
        <Container
          className={classNames(
            indexCx("flex", "justify-center", "items-center")
          )}
        >
          <Button variation="bdprimary" type="submit">
            {buttonText}
          </Button>
        </Container>
      )}
    </form>
  );
};

export default WithContextStore(FormProvider)(Form);
