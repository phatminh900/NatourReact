import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../store/cart-slice";
import { useSelector } from "react-redux";
import useOpenModal from "./useOpenModal";
const useBooking = (id) => {
  const { setIsOpenModal } = useOpenModal();
  const [showRemindLogin, setShowRemindLogin] = useState(false);
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    let timer1;
    let timer2;
    if (isLoading) {
      timer1 = setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 1000);
    }
    if (isSuccess) {
      timer2 = setTimeout(() => {
        setIsSuccess(false);

        //if check in cart page remove all the item
        if (!id) dispatch(cartSliceActions.removeAllItemFromCart());
        // in individual buying
        if (id) {
          setIsOpenModal(false);
          dispatch(cartSliceActions.removeTourFromCart(id));
        }
      }, 2000);
    }
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isLoading, isSuccess,dispatch,id,setIsOpenModal]);
  return {
    showRemindLogin,
    setShowRemindLogin,
    isLogin,
    isLoading,
    isSuccess,
    setIsLoading,
  };
};

export default useBooking;
