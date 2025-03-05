import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="mt-0 w-full flex flex-col gap-5 justify-start items-center font-corporate font-normal px-5">
      <p className="text-left">
        {`Sway to your favorite international/global dance beats and enjoy
family-style Mediterranean cuisine meant to be shared amongst old friends and new as the sun
kisses and warms your skin. Our restaurant features high-end International cuisine with a focus
on the finest and freshest locally sourced ingredients and offering premium cocktails and spirits,
all served in a chic and sophisticated atmosphere.`}
      </p>

      <p className="text-left">
        {`Casa Lalla Takerkoust is a one of a kind
locale offering true luxury from its natural surroundings, good company and energy and serves
as a reminder that life is a celebration.`}
      </p>

      <h1 className="text-center mt-4 text-[25px] tracking-widest w-full font-medium">{`How to Find Casa Lalla Takerkoust ?`}</h1>

      <div className="my-5">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hg0ykixiwpvehv9hdm4s"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <p className="text-left">
        {`Casa Lalla Takerkoust is a picturesque destination nestled along the Route
d’Amizmiz, just a short 30 minute drive from Marrakech, Morocco. This serene
locale, set against the stunning backdrop of the Atlas Mountains and the
expansive Lalla Takerkoust Lake, offers a tranquil retreat for those seeking an
escape from the hustle and bustle of the city.`}
      </p>
      <p className="text-left">
        {`Whether you’re seeking a wellness retreat or a
romantic escape, Lalla Takerkoust offers a captivating blend of natural beauty
and cultural richness. The journey along Route d’Amizmiz to Casa Lalla
Takerkoust promises an unforgettable experience, inviting guests to indulge in
the comfort and hospitality that characterize the reputation of Marrakech’s hosts.`}
      </p>
    </div>
  );
};

export default Content;
