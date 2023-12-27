import React from "react";
import ke from "../icons/mapake.svg";
import ke2 from "../icons/ke2.svg";
import ke1 from "../icons/ke1.svg";
import ba from "../icons/mapaba.svg";
import ba1 from "../icons/ba1.svg";
import ba2 from "../icons/ba2.svg";
import Footer from "../components/Footer";

const Kontakt = () => {
  return (
    <div className="bg-stone-200">
      <p className="h-10"></p>
      <h1 className="text-center text-5xl font-bold">Kontakt</h1>
      <div className="grid grid-cols-3 place-items-center gap-y-12 mt-10 mb-20">
        <img src={ke2} alt="Car" className="items-center h-52" />
        <img src={ke1} alt="Car" className="items-center  h-44" />
        <img src={ke} alt="Car" className="items-center  h-64" />
        <img src={ba1} alt="Car" className="items-center  h-52" />
        <img src={ba2} alt="Car" className="items-center h-44" />
        <img src={ba} alt="Car" className="items-center  h-64" />
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
