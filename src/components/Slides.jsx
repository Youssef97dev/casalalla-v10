"use client";
import React from "react";
import Image from "next/image";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/m2bv97ottzesdqioi6hx",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/m2bv97ottzesdqioi6hx",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/aeuldjydltg3zgisujem",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/aeuldjydltg3zgisujem",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/akkjaul1qfiskaqrg507",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/akkjaul1qfiskaqrg507",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ygvykfxjvir2dtkfdiie",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/ygvykfxjvir2dtkfdiie",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/pjdoqvpfbeuldq96mewg",
    thumbnail:
      "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casalalla-v2/pjdoqvpfbeuldq96mewg",
  },
];

const Slides = () => {
  return (
    <div id="gallery" className="relative w-full min-h-[75vh]">
      <div className="absolute w-full h-full flex justify-center items-center px-2 md:px-12 lg:px-32">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          freeMode={true}
          modules={[FreeMode, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-ex1",
            prevEl: ".swiper-button-prev-ex1",
          }}
          className=""
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                width={800}
                height={800}
                loading="lazy"
                className="object-cover w-full h-full rounded-md"
                alt={`Casa lalla htakerkoust ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev-ex1 grid place-content-center left-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
          <MdOutlineArrowBackIos size={28} />
        </button>
        <button className="swiper-button-next-ex1 grid place-content-center right-8 transition text-white absolute z-[999] top-1/2 -translate-y-1/2">
          <MdOutlineArrowForwardIos size={28} />
        </button>
      </div>
    </div>
  );
};

export default Slides;
