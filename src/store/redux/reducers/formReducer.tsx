import { IAction } from "../../../types/store";
import { FORM_INIT, FORM_UPDATE_ELEMENT } from "../types/formTypes";

const typesForm = [FORM_INIT, FORM_UPDATE_ELEMENT] as const;
type TFormTypes = typeof typesForm[number];

const reducer = (state, payload) => ({
  [FORM_INIT]: () => {
    return { state, ...payload };
  },
  [FORM_UPDATE_ELEMENT]: () => {
    const { name, value } = payload;

    return { ...state, [name]: value };
  },
});

export const formReducer = <P,>(state, action: IAction<TFormTypes, P>) => {
  const { type, payload } = action;

  const newState = reducer(state, payload)[type]();

  return newState;
};
