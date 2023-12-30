import React from "react";
import StickerCar from "../components/StickerCar";
import Footer from "../components/Footer";
import a3l from "../icons/a3l.svg";
import a3l1 from "../icons/a3l1.svg";

export const A3l = () => {
  return (
    <div>
      <StickerCar
        name="AUDI A3 limuzína 2.0 TDI Advanced"
        img1={a3l}
        model="A3 Limousine"
        engine="2.0 TDI 35 TDI"
        color="sivá manhattan metalíza"
        prevodovka="S tronic"
        pohon="Predný nahon"
        palivo="Diesel"
        price1="34 900 € (29 083 € bez DPH)"
        price2="43 887 € (36 573 € bez DPH)"
        img2={a3l1}
      />
      <Footer />
    </div>
  );
};

export default A3l;
