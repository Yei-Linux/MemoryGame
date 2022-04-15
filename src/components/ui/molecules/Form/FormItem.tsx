import classNames from "classnames";
import React, { useContext } from "react";
import { formContext } from "../../../../store/context";
import Input, { TInput } from "../../atoms/Input";
import Label from "../../atoms/Label";
import Select, { TSelect } from "../../atoms/Select";
import Container from "../../layouts/Container";

import styles from "./style.css";

export interface IElement {
  label?: string;
  type: "input" | "select";
  item: TInput & TSelect;
}

const cx = classNames.bind(styles);

const FormItem = ({ type, label, item }: IElement) => {
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
      {label && (
        <Label className={classNames(cx("formitem__label"))} text={label} />
      )}
      <Element
        {...item}
        onChange={handleChange}
        defaultValue={formData?.[item.name]}
      />
    </Container>
  );
};

export default FormItem;
