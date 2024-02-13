import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Layout;
