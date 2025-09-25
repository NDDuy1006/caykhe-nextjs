"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          textAlign: "center",
          fontFamily: "sans-serif",
          textTransform: "uppercase"
        }
      }}
    />
  )
}

export default ToasterProvider;