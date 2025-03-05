import Contact from "@/components/Contact";
import Content from "./components/Content";
import Intro from "./components/Intro";
import Mapbox from "@/components/Mapbox";
import Navbar from "@/components/Navbar";
import Slides from "./components/Slides";

export default function Home() {
  return (
    <div className="h-[300vh]">
      <Navbar />
      <Intro />
      <Slides />
      <Content />
      <Contact />
      <Mapbox />
    </div>
  );
}
