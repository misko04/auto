import React from "react";
import { useNavigate } from "react-router-dom";

const Sticker = ({ name, img, model, engine, color, price, address }) => {
  
  const navigate = useNavigate();
  return (
    <div
      className="bg-white w-[27] h-99 rounded-xl cursor-pointer"
      onClick={() => navigate(address)}
    >
      <p className="font-semibold py-2 pl-2">{name}</p>
      <img src={img} alt="Car" className="object-fill w-[100%]" />
      <div className="pl-2">
        <p className="font-semibold pt-2">Model: {model}</p>
        <p>Motor: {engine}</p>
        <p>Farba: {color}</p>
        <p>Cena: {price}</p>
      </div>
    </div>
  );
};

export default Sticker;
