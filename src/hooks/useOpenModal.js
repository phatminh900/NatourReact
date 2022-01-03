import { useCallback, useState } from "react";

const useOpenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModalState = useCallback(() => {
    setIsOpenModal((prevState) => !prevState);
  }, []);
  return { isOpenModal, toggleModalState, setIsOpenModal };
};

export default useOpenModal;
