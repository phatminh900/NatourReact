import { useCallback, useRef, useState } from "react";

const useCheckConfirmPass = () => {
  const inputConfirmPasswordRef = useRef();

  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const inputConfirmPassword = inputConfirmPasswordRef?.current?.value ?? "";

  // if (inputPassword !== inputConfirmPassword) {
  //     setIsPasswordMatch(false);
  //     return;
  //   }
  //   if (inputPassword === inputConfirmPassword) setIsPasswordMatch(true);
  return {
    isPasswordMatch,
    setIsPasswordMatch,
    inputConfirmPassword,
    inputConfirmPasswordRef,
  };
};

export default useCheckConfirmPass;
