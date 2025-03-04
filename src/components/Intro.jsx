import React from "react";

const Intro = () => {
  return (
    <div className="pt-44 w-full flex flex-col gap-5 justify-start items-center">
      <span className="uppercase font-corporate text-[12px] tracking-widest">
        Lac Takerkoust
      </span>
      <div>
        <h1 className="font-corporate text-center text-[25px] tracking-widest w-full">{`• Casa Lalla Takerkoust`}</h1>
        <h1 className="font-corporate text-center text-[25px] tracking-widest w-full">{`Restaurant`}</h1>
      </div>
      <p className="text-center px-5 font-light">
        {`Casa Lalla Takerkoust Restaurant is a unique dining and social destination where the vibe of
your favorite jet-setting hotspots of Mykonos, Ibiza and other Balearic Islands converge with the
crystal clear waters of Lalla Takerkoust and the backdrop of the High Atlas Mountains only 30
minutes away from Marrakech.`}
      </p>
    </div>
  );
};

export default Intro;
