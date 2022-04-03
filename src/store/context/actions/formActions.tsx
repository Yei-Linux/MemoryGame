import { IAction } from "../../../types/store";
import { TFormUITypes } from "../reducers/formReducer";

export const updateElement = (dispatch: React.Dispatch<IAction<TFormUITypes, unknown>>,payload) => {
    dispatch({
        payload,
        type: "@formui/update-element"
    })
}

export const initFormElement = (dispatch: React.Dispatch<IAction<TFormUITypes, unknown>>,payload) => {
    dispatch({
        payload,
        type: "@formui/init"
    })
}