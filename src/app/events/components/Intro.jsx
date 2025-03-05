import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="pt-44 w-full flex flex-col gap-5 justify-start items-center px-5">
      <div className="w-full flex flex-col gap-1 justify-start items-center">
        <span className="uppercase font-corporate font-normal text-[14px] tracking-widest">
          Lac Takerkoust
        </span>
        <div>
          <h1 className="font-corporate font-medium text-center text-[45px] tracking-widest w-full">{`CASA LALLA`}</h1>
          <h1 className="font-corporate font-normal text-center text-[25px] tracking-widest w-full">{`Takerkoust Events`}</h1>
        </div>
      </div>
      <p className="text-center font-corporate font-normal mb-5">
        {`a variety of engaging events are designed to enrich your experience at Lalla Takerkoust. Guests can participate in seasonal celebrations that highlight local culture, such as traditional Moroccan music and dance performances.`}
      </p>
    </div>
  );
};

export default Intro;
