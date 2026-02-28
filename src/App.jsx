import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Service from "./components/Service/Service";
import ServiceCard from "./components/Service/ServiceCard";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Service />
    </div>
  );
};

export default App;
