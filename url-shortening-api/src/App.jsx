import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocalStorage } from './hooks/useLocalStorage';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Input from './components/Input';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  const [links, setLinks] = useLocalStorage([], 'links');
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const notifyError = (message) => {
    toast.error(message, {
      autoClose: 2000,
    });
  };

  const notifyInfo = () => toast.info('Make sure to insert a valid link');

  const handleDelete = (id) => {
    setLinks((links) => links.filter((lnk) => lnk.id !== id));
  };

  const shortenUrl = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.tinyurl.com/create?api_token=${
          import.meta.env.VITE_TINY_URL
        }`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            url: `${link}`,
            domain: 'tinyurl.com',
            description: 'string',
          }),
        }
      );

      if (!response.ok) {
        notifyError('Invalid Input!');
        setTimeout(() => {
          notifyInfo();
        }, 2500);
        return;
      }

      const data = await response.json();

      const { tiny_url: shortenedLink, url: originalLink } = data.data;

      if (shortenedLink) {
        // construct new object
        const newAddedLink = {
          id: Date.now(),
          originalLink,
          shortenedLink,
          isCopied: false,
        };

        // update the state
        setLinks((links) => [...links, newAddedLink]);
        setLink('');
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Error occurred:', error);
      console.log(error);
      if (error.includes('NetworkError')) {
        notifyError('Check your network connection!');
      }
    }
  };

  return (
    <div>
      <Navbar />

      <Hero />

      <Section>
        <Input
          link={link}
          links={links}
          setLink={setLink}
          onShortenURL={shortenUrl}
        />
        <Statistics
          links={links}
          setLinks={setLinks}
          onDeleteLink={handleDelete}
        />
      </Section>

      <CTA />

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
