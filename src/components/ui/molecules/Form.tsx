import React, {
  FormEvent,
  FormEventHandler,
  useContext,
  useEffect,
} from "react";
import WithContextStore from "../../../hocs/WithContextStore";
import { formContext } from "../../../store/context";
import FormProvider from "../../../store/context/providers/FormProvider";
import Button from "../atoms/Button";
import Input, { TInput } from "../atoms/Input";
import Select, { TSelect } from "../atoms/Select";

export interface IFormItem {
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
}

const FormItem = ({ type, item }: IElement) => {
  const elementTypes = {
    input: Input,
    select: Select,
  };

  const Element = elementTypes[type];

  return <Element {...item} />;
};

const Form = ({ elements, buttonText }: IForm) => {
  const hasSubmitButton = !!elements.length;
  const { initFormElements } = useContext(formContext);

  const handleSubmit = <T,>(e: FormEvent<T>) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit}>
      {elements.map(({ type, item }) => (
        <FormItem type={type} item={item} />
      ))}

      {hasSubmitButton && <Button type="submit">{buttonText}</Button>}
    </form>
  );
};

export default WithContextStore(FormProvider)(Form);
