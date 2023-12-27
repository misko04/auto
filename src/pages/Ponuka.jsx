import React from "react";
import Sticker from "../components/Sticker";
import a3spw from "../icons/a3spw.svg";
import q2 from "../icons/q2.svg";
import a3sp from "../icons/a3sp.svg";
import q3 from "../icons/q3.svg";
import a3l from "../icons/a3l.svg";
import a62 from "../icons/a62.svg";
import a63 from "../icons/a63.svg";
import a8 from "../icons/a8.svg";
import s7 from "../icons/s7.svg";
import Footer from "../components/Footer";

const Ponuka = () => {
  return (
    <div className="bg-stone-200">
      <p className=" h-10"></p>
      <div className="grid grid-cols-3 place-items-center gap-y-12 mt-10 mb-20">
        <Sticker
          name="AUDI A3 Sportback 1.0 TFSI Basis"
          img={a3spw}
          model="A3"
          engine="1.0 TFSI"
          color="Biela"
          price="18 000€"
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
          name="AUDI A3 Sportback 1.5 TFSI Sline"
          img={a3sp}
          model="A3"
          engine="1.5 TFSI 35 TFSI"
          color="čierna mythos metalíza"
          price="34 900€"
          address="/a3sp"
        />
        <Sticker
          name="AUDI A3 limuzína 2.0 TDI Advanced"
          img={a3l}
          model="A3"
          engine="2.0 TDI 35 TD"
          color="sivá manhattan metalíza"
          price="34 900€"
          address="/a3l"
        />
        <Sticker
          name="AUDI Q3 2.0 TDI Advanced"
          img={q3}
          model="Q3"
          engine="2.0 TDI 35 TDI"
          color="čierna mythos metalíza"
          price="39 900 €"
          address="/q3"
        />
        <Sticker
          name="AUDI A6 2.0 TDI Design"
          img={a62}
          model="A6"
          engine="2.0 TDI 40 TDI"
          color="modrá firmament metalíza"
          price="39 900 €"
          address="/a62"
        />
        <Sticker
          name="Audi A6 3.0 TDI Quattro Design"
          img={a63}
          model="A3"
          engine="3.0 TDI 50 TDI quattro"
          color="čierna mythos metalíza"
          price="64 900 €"
          address="/a63"
        />
        <Sticker
          name="AUDI A8 3.0 TDI Quattro"
          img={a8}
          model="A3"
          engine="3.0 TDI 50 TDI V6 quattro"
          color="mythosschwarz metallic"
          price="78 900 €"
          address="/a8"
        />
        <Sticker
          name="AUDI S7 Sportback TDI Quattro"
          img={s7}
          model="S7 Sportback"
          engine="3.0 TDI S7 quattro"
          color="Špeciálna Audi exclusive"
          price="116 834 €"
          address="/s7"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Ponuka;
