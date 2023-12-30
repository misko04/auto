import React from "react";
import StickerCar from "../components/StickerCar";
import Footer from "../components/Footer";
import q21 from "../icons/q21.svg";
import q2 from "../icons/q2.svg";

export const Q2 = () => {
  return (
    <div>
      <StickerCar
        name="Audi Q2 1.5 TFSI Sport"
        img1={q2}
        model="Q2"
        engine="1.5 TFSI"
        color="Šedá"
        prevodovka="Stronic"
        pohon="Predný nahon"
        palivo="Benzín"
        price1="18 000€"
        price2="30 000€"
        img2={q21}
      />
      <Footer />
    </div>
  );
};

export default Q2;
