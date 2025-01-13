import { useContext } from "react";
import { inputNamaContext } from "../pages/Home";
/* eslint-disable react/prop-types */
export default function Button({
  children = "Button",
  action = "default",
  actionOnClick,
  
}) {
  const theme = useContext(inputNamaContext);

  if (action === "default") {
    return (
      <button
        onClick={actionOnClick}
        className="mt-10 rounded-xl px-8 py-2 bg-cyan-100 text-cyan-700 font-semibold hover:bg-cyan-400 transition duration-300 ease-in-out"
      >
        {children}
        {theme}
      </button>
    );
  } else if (action === "update") {
    return (
      <button
        onClick={actionOnClick}
        className="mt-10 rounded-xl px-8 py-2 bg-yellow-100 text-yellow-700 font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out"
      >
        {children}
        {theme}
      </button>
    );
  } else if (action === "delete") {
    return (
      <button
        onClick={actionOnClick}
        className="mt-10 rounded-xl px-8 py-2 bg-red-100 text-red-700 font-semibold hover:bg-red-400 transition duration-300 ease-in-out"
      >
        {children}
        {theme}
      </button>
    );
  }
}
