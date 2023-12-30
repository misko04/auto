import React from "react";

export const StickerCar = ({
  name,
  img1,
  model,
  engine,
  color,
  price,
  prevodovka,
  pohon,
  palivo,
  img2,
  price1,
  price2,
}) => {
  return (
    <div className="bg-white  h-99 rounded-xl pr-0 ">
      <p className="font-semibold py-2 pl-2">{name}</p>
      <div className="grid grid-cols-2 gap-x-16  gap-y-12 mt-10 mb-20">
        <img src={img1} alt="Car" className="object-fill w-[100%] ml-5" />
        <div className="pl-2">
          <p className="font-semibold pt-2">Model: {model}</p>
          <p>Motor: {engine}</p>
          <p>Farba: {color}</p>
          <p>Prevodovka: {prevodovka}</p>
          <p>Pohon: {pohon}</p>
          <p>Palivo: {palivo}</p>
          <p className="mt-10">Aktuálna Cena: {price1}</p>
          <p>Cenníková Cena: {price2}</p>
        </div>
        <div className="w-[200vh]">
          <img src={img2} alt="Car" className="object-fill w-[100%]" />
        </div>
      </div>
      <div className="ml-10 mb-3">
        <h1 className="font-bold text-xl">Výbava </h1>
        <ul class="list-disc">
          <li>Centrálne uzamykanie</li>
          <li>Diaľkové ovládanie</li>
          <li>Elektricky ovládané vonkajšie spätné zrkadlá </li>
          <li>Elektricky ovládané okná</li>
          <li> Multifunkčný volant</li>
          <li>Rádio</li>
          <li>Navigačný systém</li>
          <li>AUTOHOLD</li>
        </ul>
        <h1 className="font-bold text-xl">Ďalšia výbava </h1>
        <ul class="list-disc">
          <li>Centrálne uzamykanie</li>
          <li>Diaľkové ovládanie</li>
          <li>Elektricky ovládané vonkajšie spätné zrkadlá </li>
          <li>Elektricky ovládané okná</li>
          <li> Multifunkčný volant</li>
          <li>Rádio</li>
          <li>Navigačný systém</li>
          <li>AUTOHOLD</li>
        </ul>
      </div>
    </div>
  );
};
export default StickerCar;
