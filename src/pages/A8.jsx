import React from "react";
import StickerCar from "../components/StickerCar";
import Footer from "../components/Footer";
import a8 from "../icons/a8.svg";
import a81 from "../icons/a81.svg";

export const A8 = () => {
  return (
    <div>
      <StickerCar
        name="AUDI A8 3.0 TDI Quattro"
        img1={a8}
        model="A8 2021"
        engine="1 3.0 TDI 50 TDI V6 quattro"
        color="mythosschwarz metallic"
        prevodovka="tiptronic 8-st"
        pohon="4x4"
        palivo="diesel"
        price1="78 900 €(65 750 € bez DPH)"
        price2="128 862 €(107 385 € bez DPH)"
        img2={a81}
      />
      <Footer />
    </div>
  );
};

export default A8;
