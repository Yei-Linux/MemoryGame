import React, { useReducer } from "react";
import { formContext } from "..";
import { initFormElement, updateElement } from "../actions/formActions";
import { formReducer } from "../reducers/formReducer";

type TInitialValue = Record<string, string | unknown | null>;

interface IInitialValue {
  formData: TInitialValue;
}

interface IFormProvider {
  children: React.ReactNode;
  initialValue: IInitialValue;
}

const FormProvider = ({ children }: IFormProvider) => {
  const initialState: IInitialValue = {
    formData: {},
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <formContext.Provider
      value={{
        formData: state.formData,
        updateElement: (payload) => updateElement(dispatch, payload),
        initFormElements: (payload) => initFormElement(dispatch, payload),
      }}
    >
      {children}
    </formContext.Provider>
  );
};

export default FormProvider;
