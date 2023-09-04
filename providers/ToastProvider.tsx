"use client";
import useThemeState from "@/store/themeStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  const { theme } = useThemeState();
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme === "dark" ? "dark" : "light"}
    />
  );
};

export default ToastProvider;
