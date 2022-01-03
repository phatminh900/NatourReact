import { useState } from "react";

const useCheckConfirmPass = () => {
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  return {
    isPasswordMatch,
    setIsPasswordMatch,
  };
};

export default useCheckConfirmPass;
