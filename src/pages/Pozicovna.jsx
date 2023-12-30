import React from "react";
import Sticker from "../components/Sticker";
import q4 from "../icons/q4.svg";
import q5 from "../icons/q5.svg";
import q41 from "../icons/q41.svg";

const Pozicovna = () => {
  return (
    <div className=" bg-stone-200 h-screen">
      <p className="h-10"></p>
      <p className="mr-32 ml-32">
        Auto požičovňa Zažite dokonalý výlet s našimi luxusnými autami!V naśej
        auto požičovni nájdete výber špičkových vozidiel, pripravených na vašu
        nezabudnuteľnú cestu. S našimi konkurencieschopnými cenami a
        prvotriednymi službami vám zabezpečíme komfortný a elegantný spôsob
        prepravy. Nechajte sa uniesť pôvabom našich áut a vyhľadajte nás ešte
        dnes pre nazabudnuteľný zážitok na cestách.
      </p>
      <div className="grid grid-cols-3 place-items-center gap-y-12 mt-10 mb-20">
        <Sticker
          name="AUDI Q5"
          img={q5}
          model="Q5"
          engine="2.0 TDI 40 quattro"
          color="daytonagrau perleffekt"
          price="260 €/den"
        />
        <Sticker
          name="AUDI Q4 35 e-tron"
          img={q4}
          model="Q4"
          engine="35.0"
          color="čierna mythos metalíza"
          price="230€/den"
        />
        <Sticker
          name="AUDI Q4 40 e-tron"
          img={q41}
          model="Q4 e-tron"
          engine="40.0"
          color="sivá kiesel"
          price="210 €/den"
        />
      </div>
    </div>
  );
};

export default Pozicovna;
