import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  async function shortenUrl() {
    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: 'https://example.com' }),
      });
      const data = await response.json();
      console.log(data.result_url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}

export default App;
