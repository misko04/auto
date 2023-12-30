import React from "react";
import Button from "../components/Button";
import Sticker from "../components/Sticker";
import a8 from "../icons/a8.svg";
import q2 from "../icons/q2.svg";
import a3l from "../icons/a3l.svg";
import Footer from "../components/Footer";
import background from "../icons/homebg.svg";

const Domov = () => {
  return (
    <div>
      <div className="h-screen relative bg-no-repeat bg-cover bg-blend-overlay justify-center items-center flex flex-col ">
        {/* BG */}
        <img
          src={background}
          alt="BG"
          className="object-cover w-full h-full absolute top-0 right-0 bottom-0 left-0 z-[-2]"
        />
        <div className=" h-full absolute top-0 right-0 bottom-0 left-0 z-[-1] bg-stone-400 bg-opacity-50" />
        {/* BG-END */}

        <p className="font-bold text-xl pb-2 ">
          Krásne a spoľahlivé autá za vynikajúce ceny
        </p>
        <Button text="Zobraziť celú ponuku" address="/ponuka" />
      </div>
      <div className="w-[200] h-[80vh] grid grid-cols-3 place-items-center bg-stone-200">
        <Sticker
          name="Top inzerát"
          img={a8}
          model="A8"
          engine="3.0 TDI 50 TDI V6 quattro"
          color="mythosschwarz metallic"
          price="78 900 €"
          address="/a8"
        />
        <Sticker
          name="Audi Q2 1.5 TFSI Sport S tronic"
          img={q2}
          model="Q2"
          engine="1.5 TFSI"
          color="Šedá metalíza"
          price="26 900 €"
          address="/q2"
        />
        <Sticker
          name="Najlepší inzerát "
          img={a3l}
          model="A3 Limousine"
          engine="2.0 TDI 35 TDI"
          color="sivá manhattan metalíza"
          price="34 900 €"
          address="a3l"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Domov;
