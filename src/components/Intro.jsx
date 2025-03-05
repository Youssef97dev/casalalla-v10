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
          <h1 className="font-corporate font-normal text-center text-[25px] tracking-widest w-full">{`Takerkoust Restaurant`}</h1>
        </div>
      </div>
      <div className="relative w-full h-full mb-5">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/q2nzpahlmh9ptokalfbk"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md"
        />
        <div className="absolute bottom-11 left-auto right-auto text-center w-full text-white text-[30px] font-corporate font-medium px-10">
          {`Exquisite cuisine and amazing panoramic view`}
        </div>
      </div>
      <p className="text-center font-corporate font-normal">
        {`Casa Lalla Takerkoust Restaurant is a unique dining and social destination where the vibe of
your favorite jet-setting hotspots of Mykonos, Ibiza and other Balearic Islands converge with the
crystal clear waters of Lalla Takerkoust and the backdrop of the High Atlas Mountains only 30
minutes away from Marrakech.`}
      </p>
    </div>
  );
};

export default Intro;
