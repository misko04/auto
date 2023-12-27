import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({
  text,
  w = "w-[450px]",
  h = "h-[70px]",
  address,

  ...props
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`${w} ${h} bg-mc-blue  rounded-xl font-bold text-md uppercase`}
      onClick={() => navigate(address)}
    >
      {text}
    </button>
  );
};

export default Button;
