import React from "react";
import img from "../icons/onas.svg";
import Footer from "../components/Footer";

const Onas = () => {
  return (
    <div className="place-items-center w-full bg-stone-200">
      <p className="h-10"></p>
      <h1 className="text-center text-5xl font-bold">O nás</h1>
      <div className="mr-32 ml-32 mt-9">
        <p>
          V roku 2016 sme vstúpili na trh s cieľom byť pre zákazníka dobrou
          voľbou. Radi vyhovieme požiadavkám zákazníka. Nie je našim cieľom byť
          za každú cenu veľký autobazár, chceme byť vyhľadávaným, stabilným,
          cenovo prístupným a hlavne dôveryhodným autobazárom. O našich
          kvalitách Vás radi presvedčíme u nás. Naším primárnym cieľom je
          zodpovednosť promptnosť, rýchlosť, kvalita a individuálny prístup ku
          klientovi.
        </p>
      </div>
      <img src={img} alt="Car" className="items-center ml-32" />
      <Footer />
    </div>
  );
};

export default Onas;
