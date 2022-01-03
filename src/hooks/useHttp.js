import { useCallback, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_KEY } from "../config/config";
const useHttp = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const sendRequest = useCallback(async (URL, dataAccount) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${URL}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(dataAccount),
      });
      if (!response.ok) {
        throw await response.json();
      }
      const data = await response.json();

      setIsLoading(false);
      setIsSuccess(true);
      return data;
    } catch (err) {
      const { error } = err;
      setIsLoading(false);
      setError(error?.message || "Something went wrong!.");
      setIsSuccess(false);
      throw error;
    }
  }, []);
  //turn off notification
  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
        if (pathname === "/signup") navigate("/login");
        if (pathname === "/login") navigate("/");
      }, 1000);
    }
    if (error) {
      timer = setTimeout(() => {
        setError(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSuccess, navigate, error, pathname]);
  return { sendRequest, isLoading, error, isSuccess };
};

export default useHttp;
