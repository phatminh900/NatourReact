import React, { useCallback, useReducer, useRef } from "react";

const ACTIONS = {
  emailInput: "EMAIL_INPUT",
  passwordInput: "PASSWORD_INPUT",
};

const initialState = {
  isEmailValid: false,
  isPasswordValid: false,
};
const isFormValidReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.emailInput:
      return { ...state, isEmailValid: Boolean(action.value.includes("@")) };
    case ACTIONS.passwordInput:
      return { ...state, isPasswordValid: Boolean(action.value.length >= 6) };
  }
  return initialState;
};
const useForm = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const [isFormValidState, dispatchIsFormValid] = useReducer(
    isFormValidReducer,
    initialState
  );
  return {
    isFormValidState,
    dispatchIsFormValid,
    ACTIONS,
    inputEmailRef,
    inputPasswordRef,
  };
};

export default useForm;
