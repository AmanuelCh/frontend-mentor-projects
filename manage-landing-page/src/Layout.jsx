import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Layout;
