import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="mt-14 w-full flex flex-col gap-5 justify-start items-center font-corporate font-normal px-5">
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

      <div className="my-10">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/drefbaza84g3qdz1gkwj"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <p className="text-left">
        {`Casa lalla is the latest addition to Marrakech’s thriving restaurants scene with the stunning view
of the lake to enjoy exquisite seafood with minimal preparation, Using the best products treated
with the greatest respect and expertise. Great Mediterranean inspired menu premier lunch hot
spot. Simply a must. It’s also an invitation to explore, relax, and connect with Moroccan nature
and culture. Plan your visit and let yourself be enchanted by this hidden jewel. Prepare yourself
to be captivated by the serene beauty of this lake. Breathtaking, High Atlas mountains amazing
experience and unforgettable views.`}
      </p>
    </div>
  );
};

export default Content;
