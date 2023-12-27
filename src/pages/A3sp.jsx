import React from "react";
import StickerCar from "../components/StickerCar";
import Footer from "../components/Footer";
import a3sp from "../icons/a3sp.svg";
import a3sp1 from "../icons/a3sp1.svg";

export const A3sp = () => {
  return (
    <div>
      <StickerCar
        name="AUDI A3 Sportback 1.0 TFSI Basis"
        img1={a3sp}
        model="A3"
        engine="1.5 TFSI"
        color="Cierna"
        prevodovka="Automat"
        pohon="Predný nahon"
        palivo="Benzín"
        price1="18 000€"
        price2="34 900€"
        img2={a3sp1}
      />
      <Footer />
    </div>
  );
};

export default A3sp;
