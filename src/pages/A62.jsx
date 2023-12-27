import React from "react";
import StickerCar from "../components/StickerCar";
import Footer from "../components/Footer";
import q21 from "../icons/q21.svg";
import q2 from "../icons/q2.svg";

export const Q2 = () => {
  return (
    <div>
      <StickerCar
        name="AUDI A3 Sportback 1.0 TFSI Basis"
        img1={q2}
        model="A3"
        engine="1.0 TFSI"
        color="Biela"
        prevodovka="Automat"
        pohon="Predný nahon"
        palivo="Benzín"
        price="18 000€"
        img2={q21}
      />
      <Footer />
    </div>
  );
};

export default Q2;