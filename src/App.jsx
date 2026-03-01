import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Service from "./components/Service/Service";
import OurWork from "./components/OurWork/OurWork";
import Teams from "./components/Teams/Teams";
import ContactUs from "./components/ContactUs/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import CustomRing from "./components/CustomRing/CustomRing";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <CustomRing />
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Service />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
