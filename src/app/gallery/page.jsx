import Navbar from "@/components/Navbar";
import GalleryImage from "./components/GalleryImage";
import Contact from "@/components/Contact";
import Mapbox from "@/components/Mapbox";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <Navbar />
      <GalleryImage />
      <Contact />
      <Mapbox />
    </div>
  );
};

export default page;
