import React from "react";
import Card from "../component/Card";
import CenterCard from "../component/CenterCard";
import MobileAlert from "../component/Alerta";

import ImageFundo from "public/Fairy_Body.jpg";
import F3 from "public/Fairy_Face_3.jpg";
import F4 from "public/Fairy_Face_4.jpg";
import F5 from "public/Fairy_Face_5.jpg";
import F6 from "public/Fairy_Face_6.jpg";
import F7 from "public/Fairy_Face_7.jpg";

function fadaPage() {
  return (
    <div className="bg-green-200 flex flex-col md:flex-row h-screen font-custom">
      <MobileAlert />

      {/* Lado Esquerdo */}
      <div className="w-full md:w-1/4 h-full pt-2 pb-2 pl-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-3 gap-2">
          <Card imageUrl={F4} />
          <Card imageUrl={F5} />
          <Card imageUrl={F6} />
        </div>
      </div>

      {/* Centro */}
      <div className="w-3/4 h-full pt-2 pl-2 pr-2 pb-2">
        <CenterCard
          titulo={"Fairy"}
          tituloT={"-2.5%"}
          tituloL={"16%"}
          svgWidth={"20%"}
          imageUrl={F3}
          svgColor={"#bbf7d0"}
          textColor={""}
          P1={` O modelo foi criado para promover jogos de fantasia, o objetivo era
            criar um personagem charmoso e versátil, capaz de capturar a imaginação
            dos jogadores e levar a uma experiência de jogo única e envolvente.`}
          P2={` Mas não é só a aparência que impressiona neste modelo. Criado com
            RiG de alta qualidade, permitindo uma ampla gama de poses e
            movimentos fluidos. Além disso, a fada tem total controle sobre suas
            expressões faciais, desde sorrisos encantadores até olhares desconfiados
            e misteriosos.`}
          P3={` Esse modelo foi usado em anúncios de jogos como Elvenar, Forge of Empires e RAID
            Shadow Legends.`}
          cortexto={"green"}
        />
      </div>

      {/* Lado Direito */}
      <div className="w-full md:w-1/4 h-full pt-2 pr-2 pb-2 font-custom flex flex-col">
        <div className="flex-grow grid grid-rows-2 gap-2">
          <Card imageUrl={ImageFundo} />
          <Card imageUrl={F7} />
        </div>
      </div>
    </div>
  );
}

export default fadaPage;
