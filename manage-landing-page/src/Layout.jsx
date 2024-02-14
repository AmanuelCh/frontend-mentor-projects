import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
    </div>
  );
};

export default Layout;
