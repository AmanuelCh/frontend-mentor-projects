import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Input from './components/Input';
import CTA from './components/CTA';
import Footer from './components/Footer';

const tempLinks = [
  {
    id: 1,
    link: 'htts://www.linkedin.com/company/non-of-your-business',
    shortenedLink: 'htts://rel.ink/k342wdfs',
    isCopied: false,
  },
  {
    id: 2,
    link: 'htts://www.linkedin.com/company/non-of-your-business',
    shortenedLink: 'htts://rel.ink/k342wdfs',
    isCopied: true,
  },
];

const App = () => {
  const [links, setLinks] = useState(tempLinks);
  const [link, setLink] = useState(
    'https://fkhadra.github.io/react-toastify/introduction'
  );

  const shortenUrl = async () => {
    try {
      const response = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: 'url=https%3A%2F%2Fgoogle.com%2F',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Failed to shorten URL');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <Section>
        <Input
          setLink={setLink}
          onShortenURL={shortenUrl}
        />
        <Statistics links={links} />
      </Section>

      <CTA />

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
