"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          color: "#027A48",
          textAlign: "center",
          background: "#ECFDF3",
          border: "solid 1px #027A48",
          fontFamily: "sans-serif",
          textTransform: "uppercase"
        }
      }}
    />
  )
}

export default ToasterProvider;