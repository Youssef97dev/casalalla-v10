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
          <h1 className="font-corporate font-normal text-center text-[25px] tracking-widest w-full">{`Takerkoust Activities`}</h1>
        </div>
      </div>
      <p className="text-center font-corporate font-normal mb-5">
        {`At Casa Lalla, a variety of exciting activities await you to enhance your experience at Lalla Takerkoust.`}
      </p>
    </div>
  );
};

export default Intro;
