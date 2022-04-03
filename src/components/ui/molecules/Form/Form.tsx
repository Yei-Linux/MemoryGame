import classNames from "classnames";
import React, { FormEvent, useContext, useEffect } from "react";
import WithContextStore from "../../../../hocs/WithContextStore";
import { formContext } from "../../../../store/context";
import FormProvider from "../../../../store/context/providers/FormProvider";
import Button from "../../atoms/Button";
import Input, { TInput } from "../../atoms/Input";
import Select, { TSelect } from "../../atoms/Select";
import Container from "../../layouts/Container";

import styles from "./style.css";
import indexStyles from "../../../../styles/index.css";

const cx = classNames.bind(styles);
const indexCx = classNames.bind(indexStyles);

export interface IFormItem {
  onChange?: (e: unknown) => void;
  name: string;
  placeholder: string;
  defaultValue?: string;
}

interface IElement {
  type: "input" | "select";
  item: TInput & TSelect;
}

export interface IForm {
  elements: IElement[];
  buttonText: string;
  onSubmit: (formData) => void;
}

const FormItem = ({ type, item }: IElement) => {
  const elementTypes = {
    input: Input,
    select: Select,
  };
  const { updateElement, formData } = useContext(formContext);

  const Element = elementTypes[type];

  const handleChange = (e) => {
    const value = e.target.value;
    updateElement({
      name: item.name,
      value,
    });
  };

  return (
    <Container>
      <Element
        {...item}
        onChange={handleChange}
        defaultValue={formData?.[item.name]}
      />
    </Container>
  );
};

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
      {elements.map(({ type, item }) => (
        <FormItem key={item.name} type={type} item={item} />
      ))}

      {hasSubmitButton && (
        <Container
          className={classNames(
            indexCx("flex", "justify-center", "items-center")
          )}
        >
          <Button type="submit">{buttonText}</Button>
        </Container>
      )}
    </form>
  );
};

export default WithContextStore(FormProvider)(Form);
