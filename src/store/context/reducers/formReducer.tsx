import { IAction } from "../../../types/store";
import { FORMUI_INIT, FORMUI_UPDATE_ELEMENT } from "../types/formTypes";

const typesForm = [FORMUI_INIT, FORMUI_UPDATE_ELEMENT] as const;
export type TFormUITypes = typeof typesForm[number];

const reducer = (state, payload) => ({
  [FORMUI_INIT]: () => {
    return { state, ...payload };
  },
  [FORMUI_UPDATE_ELEMENT]: () => {
    const { name, value } = payload;

    return { ...state, [name]: value };
  },
});

export const formReducer = <P,>(state, action: IAction<TFormUITypes, P>) => {
  const { type, payload } = action;

  const newState = reducer(state, payload)[type]();

  return newState;
};
