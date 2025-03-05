import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-2 py-16 w-full min-h-[75vh] flex flex-col  justify-center gap-16 items-center font-corporate px-5">
      <div className="w-full flex flex-col justify-start items-center gap-2 text-center">
        <span className="tracking-widest text-[12px] leading-[19.5px]">{`ADRESS`}</span>
        <span className="text-[32px] leading-[50px]">{`Lalla Takerkoust, Marrakech 40000 Morocco`}</span>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-2 text-center">
        <span className="tracking-widest text-[12px] leading-[19.5px]">{`PHONE`}</span>
        <Link
          href="http://wa.me/212675480103"
          target="_blank"
          className="text-[20px] leading-[32.5px] underline"
        >{`+212 675-480103`}</Link>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-2 text-center">
        <span className="tracking-widest text-[12px] leading-[19.5px]">{`EMAIL`}</span>
        <Link
          href="mailto:reservations@casalallatakerkoust.com"
          target="_blank"
          className="text-[20px] leading-[32.5px] underline"
        >{`reservations@casalallatakerkoust.com`}</Link>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-2 text-center">
        <span className="tracking-widest text-[12px] leading-[19.5px]">{`INSTAGRAM`}</span>
        <Link
          href="https://www.instagram.com/casa.lalla.takerkoust"
          target="_blank"
          className="text-[20px] leading-[32.5px] underline"
        >{`@casa.lalla.takerkoust`}</Link>
      </div>
    </div>
  );
};

export default Contact;
